
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, ShieldAlert, Power } from 'lucide-react';
import { queryPortfolioAI } from '../services/geminiService';
import { TerminalMessage } from '../types';

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<TerminalMessage[]>([
    { type: 'system', content: 'INITIALIZING CYBER-COUTURE CORE v1.0.4...', timestamp: new Date().toLocaleTimeString() },
    { type: 'system', content: 'AUTH_LEVEL: GUEST. COMMANDS: help, info, contact, exit', timestamp: new Date().toLocaleTimeString() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const command = userMsg.toLowerCase();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMsg, timestamp: new Date().toLocaleTimeString() }]);

    // Native Terminal Commands
    if (command === 'clear') {
      setMessages([]);
      return;
    }

    if (command === 'exit' || command === 'quit' || command === 'close') {
      setMessages(prev => [...prev, { type: 'system', content: 'TERMINATING SESSION...', timestamp: new Date().toLocaleTimeString() }]);
      setTimeout(() => setIsOpen(false), 500);
      return;
    }

    setIsTyping(true);
    const aiResponse = await queryPortfolioAI(userMsg);
    setIsTyping(false);

    setMessages(prev => [...prev, { type: 'ai', content: aiResponse, timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#00FF41] text-black p-4 rounded-none border-2 border-[#00FF41] hover:bg-black hover:text-[#00FF41] transition-all duration-300 font-terminal uppercase font-bold tracking-widest flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,65,0.4)]"
      >
        <TerminalIcon size={20} />
        Terminal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 md:w-[500px] h-[600px] bg-black border-2 border-[#00FF41] z-[60] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Terminal Header */}
            <div className="bg-[#00FF41] text-black px-4 py-2 flex justify-between items-center font-terminal text-xs font-bold border-b-2 border-black">
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} />
                <span className="tracking-tighter">SECURE_UPLINK // ARCHITECT_CORE</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 bg-black text-[#00FF41] px-2 py-0.5 border border-black hover:bg-red-600 hover:text-white transition-colors uppercase text-[10px]"
                >
                  <Power size={10} />
                  DISCONNECT
                </button>
                <X
                  size={18}
                  className="cursor-pointer hover:scale-125 transition-transform"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            {/* Terminal Content */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto font-terminal text-sm space-y-3 scroll-smooth bg-[#050505]"
            >
              {messages.map((msg, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[10px] opacity-40">
                    <span>[{msg.timestamp}]</span>
                    <span className="uppercase">{msg.type}</span>
                  </div>
                  <p className={
                    msg.type === 'system' ? 'text-white font-bold' :
                      msg.type === 'user' ? 'text-[#00FF41]' :
                        'text-gray-400 italic border-l-2 border-[#00FF41]/30 pl-3 leading-relaxed'
                  }>
                    {msg.type === 'user' && '> '}
                    {msg.content}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-[#00FF41]">
                  <span className="animate-pulse">█</span>
                  <span className="text-[10px] opacity-50 uppercase tracking-widest">Processing_Request...</span>
                </div>
              )}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-[#00FF41]/30 bg-black">
              <div className="flex items-center gap-2 group">
                <span className="text-[#00FF41] font-bold group-focus-within:animate-pulse">$</span>
                <input
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter command (type 'exit' to close)..."
                  className="bg-transparent border-none outline-none text-[#00FF41] flex-1 font-terminal placeholder:opacity-20 text-sm"
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;

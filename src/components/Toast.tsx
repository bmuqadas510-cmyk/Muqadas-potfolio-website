import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#141720] border border-[#D4AF37]/50 text-xs text-[#FFF8EB] shadow-2xl backdrop-blur-md">
        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white/50 hover:text-white"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

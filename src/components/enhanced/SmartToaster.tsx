
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster as SonnerToaster } from 'sonner';

const SmartToaster = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <SonnerToaster
          position="top-right"
          theme="dark"
          richColors
          closeButton
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(30, 41, 59, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#ffffff',
            },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SmartToaster;

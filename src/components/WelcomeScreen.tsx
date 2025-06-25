import React from 'react';
import { Button } from './ui/button';
import { GearIcon } from "@radix-ui/react-icons"
import {IconButton, Text, Strong} from '@radix-ui/themes';

interface WelcomeScreenProps {
  onOpenLogin: () => void;
  onOpenSettings: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpenLogin, onOpenSettings }) => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Change max-w-md to a larger class, e.g., max-w-xl */}
      <div className="max-w-full w-full bg-gray-800 border border-white/10 p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center justify-between gap-2">
          <span>Interview Trainer</span>
          <IconButton
            onClick={onOpenSettings}
            className="p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
          >
            <GearIcon width="18" height="18" />
          </IconButton>
        </h1>
        
        <div className="mb-8">
          <p className="text-white/70 text-sm mb-4">
            <Text as="p">
              <Strong>
                This application helps you prepare for technical interviews by providing AI-powered
                hints and solutions to coding problems.
              </Strong>
            </Text>
          </p>
          <div className="p-4 mb-4">
            <h3 className="text-white/90 font-medium mb-2">Global Shortcuts</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Toggle Visibility</span>
                <span className="text-white/90">Ctrl+B / Cmd+B</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Take Screenshot</span>
                <span className="text-white/90">Ctrl+H / Cmd+H</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Delete Last Screenshot</span>
                <span className="text-white/90">Ctrl+L / Cmd+L</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Process Screenshots</span>
                <span className="text-white/90">Ctrl+Enter / Cmd+Enter</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Reset View</span>
                <span className="text-white/90">Ctrl+R / Cmd+R</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/70">Quit App</span>
                <span className="text-white/90">Ctrl+Q / Cmd+Q</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mt-6 mb-8"></div> {/* Thin divider with vertical spacing */}
        
        <div className="p-4 mb-6">
          <h3 className="text-white/90 font-medium mb-2">Log In to start using the trainer</h3>
          <div className="flex justify-between sm:justify-between">
            <div className="flex items-center justify-center gap-8 py-4">
              <Button 
                className=" px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                onClick={onOpenLogin}
              >
                Log in
              </Button>
              <Button 
                className="px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                onClick={onOpenLogin}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-white/40 text-xs text-center">
          Start by taking screenshots of your coding problem (Ctrl+H / Cmd+H)
        </div>
      </div>
    </div>
  );
};

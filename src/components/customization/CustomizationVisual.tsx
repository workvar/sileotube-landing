'use client';

import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import ToggleItem from './ToggleItem';

const CustomizationVisual = () => {
  return (
    <div className="flex-1 w-full max-w-md relative">
      <div className="absolute inset-0 bg-brand-red/5 blur-3xl rounded-full transform rotate-12"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl border border-zinc-100 p-8">
        <div className="flex items-center justify-between mb-8 border-b border-zinc-50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
              <Settings size={18} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">Preferences</h3>
              <p className="text-xs text-zinc-400">SileoTube Settings</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <ToggleItem label="Hide Shorts Shelf" delay={500} />
          <ToggleItem label="Hide Recommended Feed" delay={1500} />
          <ToggleItem label="Hide Comments" delay={2500} />
          <ToggleItem label="Hide Sidebar" delay={3500} />
          <ToggleItem label="Grey Scale Thumbnails" delay={4500} />
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-50 text-center">
          <p className="text-xs text-zinc-400">Changes apply immediately</p>
        </div>
      </div>
    </div>
  );
};

export default CustomizationVisual;


const fs = require('fs');

const appPath = 'src/App.tsx';
let code = fs.readFileSync(appPath, 'utf8');

// Color Replacements
code = code.replace(/#0056a7/g, '#c2823a'); // Primary Brand (Orange/Bronze)
code = code.replace(/#007cba/g, '#d49650'); // Secondary Brand (Lighter Orange)
code = code.replace(/#09090b/g, '#1a2332'); // Dark Background (Deep Blue)
code = code.replace(/bg-zinc-950/g, 'bg-[#1a2332]'); // Explicit Backgrounds
code = code.replace(/text-zinc-500/g, 'text-zinc-400'); // Better text contrast for muted text

// Accessibility: Add labels to forms
code = code.replace(/<input type="text"/, '<label className="sr-only">Full Name</label>\n                <input type="text"');
code = code.replace(/<input type="email"/, '<label className="sr-only">Email Address</label>\n                <input type="email"');
code = code.replace(/<select className/, '<label className="sr-only">Industry</label>\n              <select className');
code = code.replace(/<textarea placeholder/, '<label className="sr-only">Message</label>\n              <textarea placeholder');

// Interactivity: Add cursor-pointer and hover stability
code = code.replace(/className="p-8 glass-dark rounded-3xl border-white\/5 hover:border-\[#c2823a\]\/30 transition-all group"/g, 'className="p-8 glass-dark rounded-3xl border-white/5 hover:border-[#c2823a]/30 transition-all duration-300 hover:shadow-2xl cursor-pointer group"');

// Visual alignment: Standardize Icon Size Wrapper
code = code.replace(/className="mb-6 p-3 w-fit rounded-2xl bg-white\/5 group-hover:bg-\[#c2823a\]\/10 transition-colors"/g, 'className="mb-6 p-3 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 group-hover:bg-[#c2823a]/20 transition-all duration-300"');

// Write back to file
fs.writeFileSync(appPath, code);

console.log('App.tsx string replacements completed successfully.');

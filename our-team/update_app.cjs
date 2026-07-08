const fs = require('fs');
let code = fs.readFileSync('/app/applet/App.tsx', 'utf8');

code = code.replace(
  'name: "Katie Grillaert",',
  'name: "Katie Grillaert",\n    image: "/katie.png",'
);
code = code.replace(
  'name: "Ed Vocke",',
  'name: "Ed Vocke",\n    image: "/ed.png",'
);
code = code.replace(
  'name: "Paul Crafer",',
  'name: "Paul Crafer",\n    image: "/paul.png",'
);
code = code.replace(
  'name: "Lindsey Washburn",',
  'name: "Lindsey Washburn",\n    image: "/lindsey.jpg",'
);

code = code.replace(
  '{/* Photo Placeholder */}\n                  <div className="w-full lg:w-5/12 shrink-0">\n                    <div className="aspect-[3/4] bg-stone-200 rounded-3xl overflow-hidden shadow-md relative group transition-transform duration-500 hover:scale-[1.02]">\n                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>\n                      <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium tracking-widest uppercase text-sm">\n                        {member.name.split(\' \')[0]}\n                      </div>\n                    </div>\n                  </div>',
  `{/* Photo Placeholder */}\n                  <div className="w-full lg:w-5/12 shrink-0">\n                    <div className="aspect-[3/4] bg-stone-200 rounded-3xl overflow-hidden shadow-md relative group transition-transform duration-500 hover:scale-[1.02]">\n                      {member.image ? (\n                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />\n                      ) : (\n                        <>\n                          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>\n                          <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium tracking-widest uppercase text-sm">\n                            {member.name.split(' ')[0]}\n                          </div>\n                        </>\n                      )}\n                    </div>\n                  </div>`
);

fs.writeFileSync('/app/applet/App.tsx', code);
console.log("App.tsx updated.");

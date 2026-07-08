const fs = require('fs');
let code = fs.readFileSync('/app/applet/App.tsx', 'utf8');

code = code.replace(
  '"A ForHumanity Fellow in AI governance and ethics, Katie has led policy accelerators advancing ethical frameworks, regulatory alignment, and oversight of high-risk technologies. Her work focuses on sociotechnical risk, responsible model deployment, and ensuring AI systems meet evolving legal, ethical, and organizational standards. Outside her formal roles, Katie is a passionate educator on how AI can advance or undermine equity, bringing those conversations to classrooms, organizations, and communities who are rarely at the table when AI decisions are made. Katie has contributed to developing auditable certification schemes under the EU AI Act and has worked toward a globally harmonized scheme through ForHumanity, advancing independent audit frameworks that bring accountability and ethical standards to AI governance worldwide.",',
  '<>A ForHumanity Fellow in AI governance and ethics, Katie has led policy accelerators advancing ethical frameworks, regulatory alignment, and oversight of high-risk technologies.<sup><a href="https://forhumanity.center/forhumanity-fellows/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">1</a></sup> Her work focuses on sociotechnical risk, responsible model deployment, and ensuring AI systems meet evolving legal, ethical, and organizational standards. Outside her formal roles, Katie is a passionate educator on how AI can advance or undermine equity, bringing those conversations to classrooms, organizations, and communities who are rarely at the table when AI decisions are made. Katie has contributed to developing auditable certification schemes under the EU AI Act and has worked toward a globally harmonized scheme through ForHumanity, advancing independent audit frameworks that bring accountability and ethical standards to AI governance worldwide.</>,'
);

code = code.replace(
  '"Through a UNDP-supported initiative, Katie is working with NGO and government partners to develop AI-driven financial inclusion systems designed to meet local needs and expand access for underserved communities.",',
  '<>Through a UNDP-supported initiative, Katie is working with NGO and government partners to develop AI-driven financial inclusion systems designed to meet local needs and expand access for underserved communities.<sup><a href="https://www.undp.org/digital/ai-trust-and-safety-re-imagination-programme-building-frameworks-future" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">2</a></sup></>,'
);

code = code.replace(
  '"She also serves as a risk advisor through Synapse, a not-for-profit AI advisory and adoption program of the Milwaukee Tech Hub Coalition, helping manufacturing organizations navigate AI with clarity and confidence. Above all, Katie is driven by the simple belief that technology should serve humanity."',
  '<>She also serves as a risk advisor through Synapse, a not-for-profit AI advisory and adoption program of the Milwaukee Tech Hub Coalition, helping manufacturing organizations navigate AI with clarity and confidence.<sup><a href="https://www.mketech.org/synapse/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">3</a></sup> Above all, Katie is driven by the simple belief that technology should serve humanity.</>'
);

fs.writeFileSync('/app/applet/App.tsx', code);
console.log("App.tsx updated.");

const fs = require('fs');
let code = fs.readFileSync('/app/applet/App.tsx', 'utf8');

code = code.replace(
  '"Ed brings over a decade of expertise in machine learning and privacy tech. An early adopter of deep learning, his applied work started in 2015 by modifying and training character-level recurrent neural networks on specialized datasets. He is a published IEEE author on privacy-preserving technologies and was selected for the United Nations Development Programme\'s AI Trust and Safety Re-imagination Programme, an initiative bringing together practitioners to address emerging risks in AI deployment.",',
  '<>Ed brings over a decade of expertise in machine learning and privacy tech. An early adopter of deep learning, his applied work started in 2015 by modifying and training character-level recurrent neural networks on specialized datasets. He is a published IEEE author on privacy-preserving technologies<sup><a href="https://ieeexplore.ieee.org/document/11337281" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">4</a></sup> and was selected for the United Nations Development Programme\'s AI Trust and Safety Re-imagination Programme, an initiative bringing together practitioners to address emerging risks in AI deployment.<sup><a href="https://www.undp.org/digital/ai-trust-and-safety-re-imagination-programme-building-frameworks-future" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">5</a></sup></>,'
);

code = code.replace(
  '"Ed extends this work through teaching and advisory practice. As an AI Instructor at the Milwaukee School of Engineering Center for Professional Education and founder of the AI advisory firm Superior Communications, he helps governments, nonprofits, and private industry move from AI ambition to responsible implementation. He has served as a panelist at University of Wisconsin E-Business Consortium on AI governance and ethical AI use.",',
  '<>Ed extends this work through teaching and advisory practice. As an AI Instructor at the Milwaukee School of Engineering Center for Professional Education<sup><a href="https://cpe.msoe.edu/search/publicCourseSearchDetails.do?method=load&courseId=1118265&selectedProgramAreaId=1020054&selectedProgramStreamId=1119674" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">6</a></sup> and founder of the AI advisory firm Superior Communications, he helps governments, nonprofits, and private industry move from AI ambition to responsible implementation. He has served as a panelist at University of Wisconsin E-Business Consortium on AI governance and ethical AI use.<sup><a href="https://uwebc.wisc.edu/uwebc-events/ede020b1-bdb1-ef11-806a-005056b0b30d/" target="_blank" rel="noopener noreferrer" className="text-nobel-gold hover:underline ml-0.5">7</a></sup></>,'
);

fs.writeFileSync('/app/applet/App.tsx', code);
console.log("App.tsx updated.");

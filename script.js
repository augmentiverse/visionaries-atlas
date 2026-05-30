const REFERENCE_STATS = {
  scientist: { vision: 96, engineering: 94, business: 45, design: 70, execution: 94, impact: 97 },
  engineer: { vision: 93, engineering: 98, business: 65, design: 78, execution: 95, impact: 96 },
  designer: { vision: 94, engineering: 72, business: 82, design: 99, execution: 94, impact: 94 },
  visionary: { vision: 96, engineering: 70, business: 88, design: 88, execution: 94, impact: 96 }
};

const referenceProfile = (data) => ({
  tier: data.tier || "pro",
  model: `assets/models/${data.id}.glb`,
  flag: data.flag || "",
  stats: data.stats || REFERENCE_STATS[data.role] || REFERENCE_STATS.visionary,
  tags: `${data.name} ${data.domain} ${data.notable} ${data.taxonomy.join(" ")}`.toLowerCase(),
  bio: data.bio,
  achs: data.contributions.slice(0, 4).map((text, index) => ({ i: String(index + 1).padStart(2, "0"), t: text })),
  career: data.career,
  sources: data.sources,
  links: data.links || data.sources,
  meta: {
    innovationType: data.innovationType,
    era: data.era,
    keyPlatform: data.notable,
    primaryMethod: data.primaryMethod,
    impactLayer: data.impactLayer,
    century: data.century,
    decade: data.decade,
    livingStatus: data.livingStatus,
    taxonomy: data.taxonomy,
    influenceNetwork: data.influenceNetwork,
    criticalLens: data.criticalLens,
    tierGroup: data.tierGroup || "Tier 2: foundational innovator"
  },
  ...data,
  rolel: data.roleLabel,
  company: data.company || data.institution
});

const INNOVATORS = [
  { id:"einstein", name:"Albert Einstein", role:"scientist", rolel:"Theoretical Physicist", company:"Institute for Advanced Study", country:"Germany / USA", flag:"🇩🇪", rating:99, tier:"legend", model:"assets/models/einstein.glb", dob:"Mar 14, 1879", birth:"Ulm, Kingdom of Wurttemberg", edu:"ETH Zurich", domain:"Physics, Relativity", notable:"Relativity, Photoelectric Effect", tags:"einstein physics relativity nobel photoelectric", stats:{vision:99,engineering:70,business:45,design:60,execution:94,impact:99}, bio:"Albert Einstein reshaped modern physics by developing special and general relativity and by explaining the photoelectric effect, work that helped establish quantum theory. His theories changed scientific understanding of space, time, gravity, light, and energy, while his public voice made him one of the most recognized intellectual figures of the 20th century.", achs:[{i:"🧭",t:"Developed the <strong>special and general theories of relativity</strong>"},{i:"💡",t:"Explained the <strong>photoelectric effect</strong>, central to his Nobel recognition"},{i:"⚛️",t:"Published foundational 1905 papers that transformed physics"},{i:"🏛️",t:"Became a leading scholar at the Institute for Advanced Study"}], career:[{y:"1905",c:"Annus Mirabilis",n:"Published major papers on light quanta, Brownian motion, special relativity, and mass-energy equivalence"},{y:"1915",c:"Relativity",n:"Presented the general theory of relativity"},{y:"1921",c:"Nobel Prize",n:"Awarded the Nobel Prize in Physics"},{y:"1933",c:"Princeton",n:"Joined the Institute for Advanced Study after leaving Germany"}], sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/1921/einstein/facts/"},{label:"Nobel Prize biography",url:"https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/"}] },
  { id:"curie", name:"Marie Curie", role:"scientist", rolel:"Physicist / Chemist", company:"University of Paris", country:"Poland / France", flag:"🇵🇱", rating:98, tier:"legend", model:"assets/models/curie.glb", dob:"Nov 7, 1867", birth:"Warsaw, Congress Poland", edu:"University of Paris", domain:"Radioactivity, Chemistry", notable:"Radium, Polonium, Nobel Prizes", tags:"marie curie radioactivity radium polonium nobel", stats:{vision:96,engineering:80,business:45,design:65,execution:98,impact:99}, bio:"Marie Curie pioneered the study of radioactivity and helped discover polonium and radium. She was the first woman to win a Nobel Prize and remains uniquely recognized for Nobel Prizes in two scientific fields: Physics and Chemistry. Her research reshaped atomic science, medicine, and the scientific role of women in public life.", achs:[{i:"🧪",t:"Pioneered the scientific study of <strong>radioactivity</strong>"},{i:"⚗️",t:"Helped discover <strong>polonium</strong> and <strong>radium</strong>"},{i:"🏅",t:"Won the 1903 Nobel Prize in Physics"},{i:"🏅",t:"Won the 1911 Nobel Prize in Chemistry"}], career:[{y:"1898",c:"Paris",n:"Announced discoveries of polonium and radium with Pierre Curie"},{y:"1903",c:"Nobel Prize",n:"Shared the Nobel Prize in Physics with Pierre Curie and Henri Becquerel"},{y:"1906",c:"Sorbonne",n:"Became the first woman professor at the University of Paris"},{y:"1911",c:"Nobel Prize",n:"Awarded the Nobel Prize in Chemistry"}], sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Marie-Curie"}] },
  { id:"turing", name:"Alan Turing", role:"scientist", rolel:"Mathematician / Computer Scientist", company:"Bletchley Park / University of Manchester", country:"UK", flag:"🇬🇧", rating:98, tier:"legend", model:"assets/models/turing.glb", dob:"Jun 23, 1912", birth:"London, England", edu:"King's College Cambridge / Princeton", domain:"Computing, Cryptanalysis, AI", notable:"Turing Machine, Enigma, AI", tags:"alan turing computation computer science enigma ai", stats:{vision:98,engineering:96,business:35,design:70,execution:96,impact:99}, bio:"Alan Turing gave mathematical form to computation through the concept now called the Turing machine, helped Allied codebreaking during World War II, and later wrote influential work on machine intelligence. His ideas underpin theoretical computer science, cryptography, artificial intelligence, and the modern stored-program computer tradition.", achs:[{i:"🧮",t:"Formalized computation with the <strong>Turing machine</strong>"},{i:"🔐",t:"Contributed to Allied codebreaking at <strong>Bletchley Park</strong>"},{i:"🧠",t:"Published early work on machine intelligence"},{i:"💻",t:"Helped shape the foundations of modern computer science"}], career:[{y:"1936",c:"Computability",n:"Published work defining computable numbers and abstract computing machines"},{y:"1939",c:"Bletchley Park",n:"Joined wartime codebreaking work"},{y:"1945",c:"NPL",n:"Worked on designs for the Automatic Computing Engine"},{y:"1950",c:"AI",n:"Published Computing Machinery and Intelligence"}], sources:[{label:"Stanford Encyclopedia",url:"https://plato.stanford.edu/entries/turing/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Alan-Turing"}] },
  { id:"tesla", name:"Nikola Tesla", role:"engineer", rolel:"Inventor / Electrical Engineer", company:"Tesla Electric", country:"Serbia / USA", flag:"🇷🇸", rating:96, tier:"elite", model:"assets/models/tesla.glb", dob:"Jul 10, 1856", birth:"Smiljan, Austrian Empire", edu:"Graz University of Technology", domain:"Electric Power, AC Systems", notable:"AC Power, Induction Motor, Tesla Coil", tags:"nikola tesla alternating current induction motor wireless", stats:{vision:98,engineering:98,business:55,design:82,execution:90,impact:97}, bio:"Nikola Tesla was a Serbian American inventor and electrical engineer whose work on alternating-current power systems, rotating magnetic fields, induction motors, and high-voltage experiments helped define the electrical infrastructure of the modern world. His inventions and demonstrations made him one of the emblematic technological visionaries of the early 20th century.", achs:[{i:"⚡",t:"Advanced practical <strong>alternating-current power systems</strong>"},{i:"🔄",t:"Patented work related to the rotating magnetic field and induction motor"},{i:"📡",t:"Experimented with wireless power and high-frequency electrical systems"},{i:"🧲",t:"Invented the <strong>Tesla coil</strong> in 1891"}], career:[{y:"1884",c:"New York",n:"Arrived in the United States and worked briefly with Thomas Edison"},{y:"1887",c:"AC Motor",n:"Developed alternating-current motor and power system patents"},{y:"1891",c:"Tesla Coil",n:"Invented the Tesla coil"},{y:"1893",c:"Chicago",n:"AC systems were showcased at the World's Columbian Exposition"}], sources:[{label:"Britannica biography",url:"https://www.britannica.com/biography/Nikola-Tesla"},{label:"U.S. EIA profile",url:"https://www.eia.gov/kids/history-of-energy/famous-people/tesla.php"}] },
  { id:"mandela", name:"Nelson Mandela", role:"visionary", rolel:"Anti-Apartheid Leader / President", company:"South Africa", country:"South Africa", flag:"🇿🇦", rating:98, tier:"legend", model:"assets/models/mandela.glb", dob:"Jul 18, 1918", birth:"Mvezo, South Africa", edu:"University of Fort Hare / University of South Africa", domain:"Civil Rights, Democracy", notable:"End of Apartheid, Nobel Peace Prize", tags:"nelson mandela apartheid south africa democracy nobel", stats:{vision:98,engineering:35,business:75,design:80,execution:97,impact:99}, bio:"Nelson Mandela was a South African anti-apartheid leader who became the country's first Black president after the first national elections open to all citizens. His leadership, imprisonment, negotiation, and reconciliation work made him one of the defining democratic and human-rights figures of the 20th century.", achs:[{i:"🕊️",t:"Shared the <strong>1993 Nobel Peace Prize</strong> with F. W. de Klerk"},{i:"🗳️",t:"Became South Africa's first Black president in 1994"},{i:"⚖️",t:"Helped lead the transition away from apartheid"},{i:"🤝",t:"Made reconciliation a central democratic project"}], career:[{y:"1944",c:"ANC",n:"Helped form the ANC Youth League"},{y:"1964",c:"Rivonia Trial",n:"Was sentenced to life imprisonment"},{y:"1990",c:"Release",n:"Released from prison after 27 years"},{y:"1994",c:"Presidency",n:"Elected president of South Africa"}], sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/peace/1993/mandela/facts/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Nelson-Mandela"}] },
  { id:"king", name:"Martin Luther King Jr.", role:"visionary", rolel:"Civil Rights Leader", company:"Southern Christian Leadership Conference", country:"USA", flag:"🇺🇸", rating:98, tier:"legend", model:"assets/models/king.glb", dob:"Jan 15, 1929", birth:"Atlanta, GA", edu:"Morehouse / Crozer / Boston University", domain:"Civil Rights, Nonviolence", notable:"Civil Rights Movement, Nobel Peace Prize", tags:"martin luther king civil rights nonviolence nobel", stats:{vision:98,engineering:30,business:70,design:85,execution:96,impact:99}, bio:"Martin Luther King Jr. was a Baptist minister and civil-rights leader whose strategy of nonviolent protest helped transform U.S. law and public life. His leadership in campaigns for desegregation, voting rights, and racial justice made him one of the most influential moral and political voices of the 20th century.", achs:[{i:"🕊️",t:"Awarded the <strong>1964 Nobel Peace Prize</strong>"},{i:"🎙️",t:"Delivered the historic <strong>I Have a Dream</strong> speech"},{i:"🚌",t:"Helped lead the Montgomery Bus Boycott"},{i:"⚖️",t:"Advanced national civil-rights and voting-rights reform"}], career:[{y:"1955",c:"Montgomery",n:"Helped lead the Montgomery Bus Boycott"},{y:"1957",c:"SCLC",n:"Became founding president of the Southern Christian Leadership Conference"},{y:"1963",c:"Washington",n:"Delivered I Have a Dream during the March on Washington"},{y:"1964",c:"Nobel Prize",n:"Received the Nobel Peace Prize"}], sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/peace/1964/king/facts/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Martin-Luther-King-Jr"}] },
  { id:"johnson", name:"Katherine Johnson", role:"scientist", rolel:"Mathematician", company:"NASA", country:"USA", flag:"🇺🇸", rating:94, tier:"pro", model:"assets/models/katherine-johnson.glb", dob:"Aug 26, 1918", birth:"White Sulphur Springs, WV", edu:"West Virginia State College", domain:"Mathematics, Aerospace", notable:"Mercury, Apollo, Orbital Mechanics", tags:"katherine johnson nasa mathematics hidden figures orbital mechanics", stats:{vision:90,engineering:95,business:45,design:70,execution:98,impact:96}, bio:"Katherine Johnson was an American mathematician whose orbital mechanics calculations supported early U.S. crewed spaceflight. Her work at NASA and its predecessor helped missions from Project Mercury through Apollo, and her public recognition later highlighted the essential contributions of Black women mathematicians in aerospace history.", achs:[{i:"🚀",t:"Calculated trajectories for early U.S. crewed space missions"},{i:"🌕",t:"Contributed to Apollo-era spaceflight mathematics"},{i:"🧮",t:"Worked as a NASA mathematician and human computer"},{i:"🏅",t:"Received the Presidential Medal of Freedom in 2015"}], career:[{y:"1953",c:"NACA",n:"Joined the Langley laboratory as a mathematician"},{y:"1961",c:"Mercury",n:"Worked on calculations for Alan Shepard's flight"},{y:"1962",c:"Orbital Flight",n:"Verified calculations for John Glenn's orbital mission"},{y:"1986",c:"NASA",n:"Retired after a long career in aerospace mathematics"}], sources:[{label:"NASA biography",url:"https://www.nasa.gov/katherine-johnson/"},{label:"NASA Science profile",url:"https://science.nasa.gov/people/katherine-johnson/"}] },
  { id:"gandhi", name:"Mahatma Gandhi", role:"visionary", rolel:"Independence Leader", company:"Indian Independence Movement", country:"India", flag:"🇮🇳", rating:98, tier:"legend", model:"assets/models/gandhi.glb", dob:"Oct 2, 1869", birth:"Porbandar, India", edu:"Inner Temple, London", domain:"Nonviolence, Independence", notable:"Satyagraha, Salt March", tags:"gandhi nonviolence india independence satyagraha", stats:{vision:99,engineering:25,business:65,design:90,execution:96,impact:99}, bio:"Mahatma Gandhi led mass campaigns against British colonial rule in India using satyagraha, civil disobedience, and nonviolent resistance. His methods influenced independence movements and civil-rights leaders across the world, making him one of the most consequential political and moral visionaries of the 20th century.", achs:[{i:"🕊️",t:"Made <strong>nonviolent resistance</strong> a large-scale political method"},{i:"🚶",t:"Led the 1930 <strong>Salt March</strong>"},{i:"🇮🇳",t:"Helped mobilize India's independence movement"},{i:"🌍",t:"Influenced global civil-rights and liberation movements"}], career:[{y:"1893",c:"South Africa",n:"Began major political organizing against discrimination"},{y:"1915",c:"India",n:"Returned to India and became a central nationalist leader"},{y:"1930",c:"Salt March",n:"Led civil disobedience against the British salt tax"},{y:"1947",c:"Independence",n:"Saw India achieve independence from British rule"}], sources:[{label:"Britannica biography",url:"https://www.britannica.com/biography/Mahatma-Gandhi"},{label:"Britannica achievements",url:"https://www.britannica.com/summary/Mahatma-Gandhis-Achievements"}] },
  { id:"carson", name:"Rachel Carson", role:"scientist", rolel:"Marine Biologist / Author", company:"U.S. Fish and Wildlife Service", country:"USA", flag:"🇺🇸", rating:93, tier:"pro", model:"assets/models/rachel-carson.glb", dob:"May 27, 1907", birth:"Springdale, PA", edu:"Pennsylvania College for Women / Johns Hopkins", domain:"Environmental Science", notable:"Silent Spring", tags:"rachel carson silent spring environment ecology pesticides", stats:{vision:95,engineering:55,business:45,design:88,execution:94,impact:96}, bio:"Rachel Carson was a marine biologist and writer whose 1962 book Silent Spring helped catalyze the modern environmental movement by challenging the widespread use of synthetic pesticides. Her work joined scientific evidence with public communication and reshaped environmental policy debates in the late 20th century.", achs:[{i:"🌱",t:"Authored <strong>Silent Spring</strong> in 1962"},{i:"🐦",t:"Helped bring pesticide risks into public debate"},{i:"🌊",t:"Published influential writing on marine life and ecology"},{i:"🏛️",t:"Helped inspire modern environmental policy and activism"}], career:[{y:"1936",c:"U.S. Bureau of Fisheries",n:"Began federal scientific and writing work"},{y:"1951",c:"The Sea Around Us",n:"Published award-winning writing on ocean science"},{y:"1962",c:"Silent Spring",n:"Published the book that transformed environmental debate"},{y:"1963",c:"Public Testimony",n:"Testified before U.S. Senate committees on pesticides"}], sources:[{label:"Britannica biography",url:"https://www.britannica.com/biography/Rachel-Carson"},{label:"Britannica Silent Spring",url:"https://www.britannica.com/topic/Silent-Spring"}] },
  { id:"lecun", name:"Yann LeCun", role:"scientist", rolel:"Professor / Chief AI Scientist", company:"NYU / Meta AI", country:"France / USA", flag:"🇫🇷", rating:96, tier:"elite", model:"assets/models/lecun.glb", dob:"Jul 8, 1960", birth:"Soisy-sous-Montmorency, France", edu:"Pierre and Marie Curie University", domain:"Artificial Intelligence, Deep Learning", notable:"Convolutional Neural Networks, LeNet, Deep Learning", tags:"yann lecun ai deep learning cnn lenet meta nyu turing award", stats:{vision:97,engineering:98,business:65,design:78,execution:94,impact:98}, bio:"Yann LeCun is a French computer scientist whose work on convolutional neural networks, representation learning, and deep learning helped make neural networks central to modern artificial intelligence. He is a professor at New York University and has led major AI research efforts at Meta, and he shared the 2018 ACM A.M. Turing Award with Yoshua Bengio and Geoffrey Hinton for conceptual and engineering breakthroughs in deep neural networks.", achs:[{i:"🧠",t:"Pioneered <strong>convolutional neural networks</strong> for machine perception"},{i:"🔢",t:"Developed <strong>LeNet</strong>, a landmark neural network for handwritten digit recognition"},{i:"🏆",t:"Shared the <strong>2018 ACM A.M. Turing Award</strong>"},{i:"🏛️",t:"Helped build major AI research institutions at NYU and Meta AI"}], career:[{y:"1987",c:"University of Toronto",n:"Worked as a postdoctoral researcher with Geoffrey Hinton"},{y:"1988",c:"Bell Labs",n:"Joined AT&T Bell Laboratories and advanced neural network research"},{y:"2003",c:"NYU",n:"Joined New York University as a professor"},{y:"2013",c:"Meta AI",n:"Became founding director of Facebook AI Research in New York"}], sources:[{label:"ACM Turing Award",url:"https://awards.acm.org/about/2018-turing"},{label:"ACM laureate page",url:"https://amturing.acm.org/2018-turing-award.cfm"},{label:"NYU Tandon profile",url:"https://engineering.nyu.edu/news/ai-pioneer-yann-lecun-will-address-class-2026-nyu-tandon-commencement"},{label:"Meta Engineering award note",url:"https://engineering.fb.com/2019/03/27/ai-research/turing-award/"}] },
  { id:"hinton", name:"Geoffrey Hinton", role:"scientist", rolel:"Professor / AI Researcher", company:"University of Toronto / Google", country:"UK / Canada", flag:"🇬🇧", rating:98, tier:"legend", model:"assets/models/hinton.glb", dob:"Dec 6, 1947", birth:"London, England", edu:"University of Cambridge / University of Edinburgh", domain:"Artificial Intelligence, Deep Learning", notable:"Backpropagation, Deep Neural Networks, Boltzmann Machines", tags:"geoffrey hinton ai deep learning neural networks backpropagation turing nobel", stats:{vision:99,engineering:97,business:55,design:72,execution:95,impact:99}, bio:"Geoffrey Hinton is a British Canadian computer scientist whose work on neural networks, representation learning, backpropagation, Boltzmann machines, and deep learning helped make modern artificial intelligence practical. He shared the 2018 ACM A.M. Turing Award with Yoshua Bengio and Yann LeCun for breakthroughs in deep neural networks, and shared the 2024 Nobel Prize in Physics with John Hopfield for foundational work connected to machine learning with artificial neural networks.", achs:[{i:"🧠",t:"Advanced <strong>deep neural networks</strong> and representation learning"},{i:"🔁",t:"Helped popularize and demonstrate the power of <strong>backpropagation</strong>"},{i:"🏆",t:"Shared the <strong>2018 ACM A.M. Turing Award</strong>"},{i:"🏅",t:"Shared the <strong>2024 Nobel Prize in Physics</strong>"}], career:[{y:"1978",c:"University of Edinburgh",n:"Completed doctoral work in artificial intelligence"},{y:"1987",c:"University of Toronto",n:"Joined the University of Toronto and built a major neural-network research group"},{y:"2013",c:"Google",n:"Joined Google after the acquisition of DNNresearch"},{y:"2024",c:"Nobel Prize",n:"Shared the Nobel Prize in Physics with John Hopfield"}], sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/2024/hinton/facts/"},{label:"ACM Turing Award",url:"https://awards.acm.org/about/2018-turing"},{label:"ACM laureate page",url:"https://amturing.acm.org/award_winners/hinton_4791679.cfm"},{label:"University of Toronto profile",url:"https://www.cs.toronto.edu/~hinton/"}] },
  { id:"altman", name:"Sam Altman", role:"visionary", rolel:"CEO", company:"OpenAI", country:"USA", flag:"🇺🇸", rating:94, tier:"pro", model:"assets/models/altman.glb", dob:"Apr 22, 1985", birth:"Chicago, IL", edu:"Stanford (Drop)", domain:"AI, Startups", notable:"ChatGPT, Loopt, YC", tags:"openai ai chatgpt ycombinator", stats:{vision:96,engineering:70,business:98,design:80,execution:95,impact:95}, bio:"Sam Altman is a prominent entrepreneur and investor who co-founded location-based networking app Loopt before becoming President of Y Combinator, the world's most successful startup accelerator. He transitioned to lead OpenAI, steering the company from a non-profit research lab to a capped-profit juggernaut that brought ChatGPT and foundational LLMs to the global masses.", achs:[{i:"🤖",t:"Launched <strong>ChatGPT</strong>, fastest growing app in history"},{i:"🧠",t:"Pioneered generative AI through <strong>GPT-4</strong>"},{i:"🚀",t:"Led <strong>Y Combinator</strong> from 2014-2019"},{i:"👁️",t:"Co-founded biometric crypto project <strong>Worldcoin</strong>"}], career:[{y:"2005",c:"Loopt",n:"Co-founded location-based app at 19"},{y:"2014",c:"Y Combinator",n:"Named President of YC by Paul Graham"},{y:"2015",c:"OpenAI",n:"Co-founded OpenAI as a non-profit"},{y:"2022",c:"OpenAI",n:"Launched ChatGPT to the public"}] },
  { id:"andreessen", name:"Marc Andreessen", role:"engineer", rolel:"Co-Founder / VC", company:"a16z", country:"USA", flag:"🇺🇸", rating:91, tier:"pro", model:"assets/models/andreessen.glb", dob:"Jul 9, 1971", birth:"Cedar Falls, IA", edu:"UIUC", domain:"Web Browsers, VC", notable:"Mosaic, Netscape, a16z", tags:"netscape a16z web browser vc", stats:{vision:95,engineering:90,business:94,design:70,execution:88,impact:95}, bio:"Marc Andreessen co-authored Mosaic, the first widely used graphical web browser, effectively opening the Internet to the general public. He later co-founded Netscape, whose 1995 IPO sparked the dot-com boom. Today, he is a highly influential Silicon Valley venture capitalist, co-founding Andreessen Horowitz (a16z) and famously declaring that software is eating the world.", achs:[{i:"🌐",t:"Co-created <strong>Mosaic</strong>, the first graphical web browser"},{i:"📈",t:"Founded <strong>Netscape</strong>, sparking the dot-com boom"},{i:"💰",t:"Co-founded powerhouse VC firm <strong>a16z</strong>"},{i:"☁️",t:"Pioneered early cloud computing with Loudcloud"}], career:[{y:"1993",c:"NCSA",n:"Released the Mosaic web browser"},{y:"1994",c:"Netscape",n:"Co-founded Netscape Communications"},{y:"1999",c:"Loudcloud",n:"Founded early cloud hosting company (later Opsware)"},{y:"2009",c:"a16z",n:"Launched venture capital firm with Ben Horowitz"}] },
  { id:"armstrong", name:"Brian Armstrong", role:"founder", rolel:"Co-Founder / CEO", company:"Coinbase", country:"USA", flag:"🇺🇸", rating:86, tier:"rising", model:"assets/models/armstrong.glb", dob:"Jan 25, 1983", birth:"San Jose, CA", edu:"Rice Univ.", domain:"Cryptocurrency", notable:"Coinbase", tags:"coinbase crypto exchange blockchain", stats:{vision:90,engineering:85,business:90,design:80,execution:88,impact:87}, bio:"A former software engineer at Airbnb, Brian Armstrong co-founded Coinbase to make buying and holding Bitcoin radically simpler. He built Coinbase into the premier fiat-to-crypto gateway and the largest cryptocurrency exchange in the United States, bringing cryptocurrency to institutional and retail investors safely while navigating massive regulatory hurdles.", achs:[{i:"🏦",t:"Built the largest US crypto exchange"},{i:"📈",t:"Led the first major crypto company IPO (2021)"},{i:"🛡️",t:"Pioneered regulated, secure fiat-to-crypto rails"},{i:"🔵",t:'Launched "Base", a major Ethereum Layer-2 network'}], career:[{y:"2011",c:"Airbnb",n:"Worked as a software engineer on fraud prevention"},{y:"2012",c:"Coinbase",n:"Founded company and entered Y Combinator"},{y:"2021",c:"Coinbase",n:"Company went public via Direct Listing ($85B valuation)"},{y:"2023",c:"Coinbase",n:"Launched the Base blockchain network"}] },
  { id:"benioff", name:"Marc Benioff", role:"founder", rolel:"Co-Founder / CEO", company:"Salesforce", country:"USA", flag:"🇺🇸", rating:90, tier:"rising", model:"assets/models/benioff.glb", dob:"Sep 25, 1964", birth:"San Francisco, CA", edu:"USC", domain:"SaaS, CRM", notable:"Salesforce, Time Magazine", tags:"salesforce saas crm enterprise", stats:{vision:94,engineering:75,business:96,design:80,execution:92,impact:91}, bio:"After a prolific early career at Oracle, Marc Benioff pioneered the Software as a Service (SaaS) model, taking enterprise software off local servers and putting it into the cloud. He built Salesforce into the world's leading CRM platform. He is also known for his philanthropic 1-1-1 model and for purchasing Time Magazine.", achs:[{i:"☁️",t:"Invented the <strong>SaaS</strong> enterprise model"},{i:"📊",t:"Created the #1 global CRM system"},{i:"🤝",t:"Pioneered the 1-1-1 corporate philanthropy model"},{i:"📰",t:"Purchased TIME Magazine in 2018"}], career:[{y:"1986",c:"Oracle",n:"Began a 13-year career, becoming youngest VP"},{y:"1999",c:"Salesforce",n:"Founded company in a rented SF apartment"},{y:"2004",c:"Salesforce",n:"Led successful IPO"},{y:"2020",c:"Salesforce",n:"Acquired Slack for $27.7 Billion"}] },
  { id:"bezos", name:"Jeff Bezos", role:"founder", rolel:"Founder", company:"Amazon", country:"USA", flag:"🇺🇸", rating:97, tier:"legend", model:"assets/models/bezos.glb", dob:"Jan 12, 1964", birth:"Albuquerque, NM", edu:"Princeton Univ.", domain:"E-Commerce, Cloud", notable:"Amazon, AWS, Blue Origin", tags:"amazon aws e-commerce space", stats:{vision:96,engineering:80,business:99,design:75,execution:98,impact:98}, bio:'Leaving a lucrative Wall Street career at D.E. Shaw, Jeff Bezos founded Amazon in his garage as an online bookstore. He relentlessly expanded it into the "Everything Store," redefining global retail and logistics. Simultaneously, he essentially invented modern cloud infrastructure through Amazon Web Services (AWS) and founded aerospace manufacturer Blue Origin.', achs:[{i:"📦",t:"Built the world's largest e-commerce empire"},{i:"☁️",t:"Invented modern cloud computing via <strong>AWS</strong>"},{i:"🚀",t:"Founded <strong>Blue Origin</strong> for space exploration"},{i:"📰",t:"Purchased The Washington Post in 2013"}], career:[{y:"1990",c:"D.E. Shaw",n:"Became youngest SVP at the investment firm"},{y:"1994",c:"Amazon",n:"Founded the company in his Seattle garage"},{y:"2006",c:"AWS",n:"Launched Amazon Web Services"},{y:"2021",c:"Amazon",n:"Stepped down as CEO, transitioned to Exec Chair"}] },
  { id:"brin", name:"Sergey Brin", role:"founder", rolel:"Co-Founder", company:"Alphabet (Google)", country:"USA", flag:"🇺🇸", rating:95, tier:"elite", model:"assets/models/brin.glb", dob:"Aug 21, 1973", birth:"Moscow, Russia", edu:"Stanford Univ.", domain:"Search, Innovation", notable:"Google, Google X", tags:"google x moonshot search", stats:{vision:94,engineering:95,business:88,design:70,execution:90,impact:97}, bio:"Sergey Brin emigrated from the Soviet Union to the US as a child and met Larry Page at Stanford, where they co-developed the PageRank algorithm. As Google grew, Brin focused on experimental moonshot projects as the director of Google X, driving development of self-driving cars (Waymo) and Google Glass. He recently returned to active engineering to help build Google's Gemini AI.", achs:[{i:"🔍",t:"Co-developed Google Search and PageRank"},{i:"🚀",t:"Directed Google X experimental labs"},{i:"🚗",t:"Spearheaded Google's autonomous driving project"},{i:"🧠",t:"Key contributor to Google's Gemini AI model"}], career:[{y:"1998",c:"Google",n:"Co-founded Google in a Menlo Park garage"},{y:"2010",c:"Google X",n:"Led the secretive moonshot division"},{y:"2015",c:"Alphabet",n:"Became President of the new parent company"},{y:"2019",c:"Alphabet",n:"Stepped down from executive duties"}] },
  { id:"buterin", name:"Vitalik Buterin", role:"engineer", rolel:"Co-Founder", company:"Ethereum", country:"Canada", flag:"🇨🇦", rating:91, tier:"pro", model:"assets/models/buterin.glb", dob:"Jan 31, 1994", birth:"Kolomna, Russia", edu:"Waterloo (Drop)", domain:"Blockchain, Crypto", notable:"Ethereum, Smart Contracts", tags:"ethereum crypto web3 blockchain", stats:{vision:98,engineering:95,business:60,design:70,execution:85,impact:93}, bio:"A child prodigy and co-founder of Bitcoin Magazine, Vitalik Buterin realized blockchains could be used for more than just money. He published the Ethereum whitepaper at age 19, proposing a decentralized platform featuring Smart Contracts. His work catalyzed the entire Web3 movement, enabling decentralized finance (DeFi), DAOs, and NFTs.", achs:[{i:"⛓️",t:"Created <strong>Ethereum</strong>, the #2 cryptocurrency"},{i:"📜",t:"Invented blockchain <strong>Smart Contracts</strong>"},{i:"🌿",t:"Successfully led Ethereum's Merge to Proof-of-Stake"},{i:"🏆",t:"Thiel Fellowship recipient"}], career:[{y:"2011",c:"Bitcoin Magazine",n:"Co-founded publication as a teenager"},{y:"2013",c:"Ethereum",n:"Published the Ethereum Whitepaper"},{y:"2015",c:"Ethereum",n:"The network officially went live"},{y:"2022",c:"Ethereum",n:'Executed "The Merge", reducing energy use by 99%'}] },
  { id:"carmack", name:"John Carmack", role:"engineer", rolel:"Co-Founder", company:"id Software", country:"USA", flag:"🇺🇸", rating:90, tier:"rising", model:"assets/models/carmack.glb", dob:"Aug 20, 1970", birth:"Roeland Park, KS", edu:"UMKC (Drop)", domain:"Gaming, VR, Aerospace", notable:"Doom, Quake Engines", tags:"idsoftware doom quake vr graphics", stats:{vision:88,engineering:99,business:60,design:75,execution:92,impact:93}, bio:"A legendary graphics programmer, John Carmack essentially invented the first-person shooter genre. He pioneered breakthroughs in 3D rendering algorithms for games like Wolfenstein 3D, Doom, and Quake. Later, he founded Armadillo Aerospace to build suborbital rockets, and served as Chief Technology Officer for Oculus, heavily advancing consumer virtual reality hardware.", achs:[{i:"👾",t:"Created the engines for <strong>Doom</strong> and <strong>Quake</strong>"},{i:"📐",t:"Pioneered real-time 3D rendering and BSP trees"},{i:"🚀",t:"Founded Armadillo Aerospace"},{i:"🕶️",t:"Drove massive advancements in standalone VR"}], career:[{y:"1991",c:"id Software",n:"Co-founded company with John Romero"},{y:"1993",c:"id Software",n:"Released DOOM, revolutionizing PC gaming"},{y:"2000",c:"Armadillo",n:"Founded aerospace company"},{y:"2013",c:"Oculus",n:"Joined as Chief Technology Officer"}] },
  { id:"chesky", name:"Brian Chesky", role:"founder", rolel:"Co-Founder / CEO", company:"Airbnb", country:"USA", flag:"🇺🇸", rating:89, tier:"rising", model:"assets/models/chesky.glb", dob:"Aug 29, 1981", birth:"Niskayuna, NY", edu:"RISD", domain:"Hospitality, UX", notable:"Airbnb", tags:"airbnb design travel hospitality", stats:{vision:92,engineering:60,business:88,design:98,execution:90,impact:90}, bio:"An industrial designer by trade, Brian Chesky disrupted the global hotel industry when he co-founded Airbnb to help pay rent in San Francisco. Known for his intense focus on user experience and design-led company culture, he guided Airbnb from a quirky air-mattress startup to a multi-billion dollar platform that fundamentally changed how the world travels.", achs:[{i:"🏠",t:"Created the global home-sharing market"},{i:"🎨",t:"Brought design-centric thinking to tech infrastructure"},{i:"🥣",t:"Funded early startup by selling Obama O's cereal"},{i:"📈",t:"Led one of the most successful IPOs of 2020"}], career:[{y:"2004",c:"RISD",n:"Graduated with BFA in Industrial Design"},{y:"2008",c:"Airbnb",n:"Co-founded company as AirBed & Breakfast"},{y:"2009",c:"Y Combinator",n:"Joined incubator to scale the company"},{y:"2020",c:"Airbnb",n:"Navigated COVID crisis and successfully went public"}] },
  { id:"collison", name:"Patrick Collison", role:"founder", rolel:"Co-Founder / CEO", company:"Stripe", country:"Ireland", flag:"🇮🇪", rating:90, tier:"rising", model:"assets/models/collison.glb", dob:"Sep 9, 1988", birth:"Limerick, Ireland", edu:"MIT (Drop)", domain:"Fintech", notable:"Stripe, Arc Institute", tags:"stripe payments fintech developer", stats:{vision:92,engineering:94,business:90,design:95,execution:92,impact:91}, bio:"Patrick Collison is an Irish entrepreneur who, along with his brother John, turned the nightmare of accepting online payments into a simple 7-line code snippet. Stripe became the definitive economic infrastructure of the internet. A polymath deeply interested in the history of science and progress, he also co-founded the Arc Institute to fund basic scientific research.", achs:[{i:"💳",t:"Built developer-first payments infrastructure"},{i:"🌍",t:"Launched Stripe Atlas for global founders"},{i:"🧬",t:"Co-founded the Arc Institute for medical research"},{i:"🏆",t:"Won BT Young Scientist of the Year at age 16"}], career:[{y:"2007",c:"Auctomatic",n:"Founded and sold first software company for $5M"},{y:"2010",c:"Stripe",n:"Co-founded Stripe with his brother John"},{y:"2011",c:"Stripe",n:"Publicly launched the payment API"},{y:"2021",c:"Arc Institute",n:"Launched biomedical research institute"}] },
  { id:"cook", name:"Tim Cook", role:"visionary", rolel:"CEO", company:"Apple", country:"USA", flag:"🇺🇸", rating:93, tier:"pro", model:"assets/models/cook.glb", dob:"Nov 1, 1960", birth:"Mobile, AL", edu:"Duke Univ.", domain:"Supply Chain, Consumer Tech", notable:"Apple Watch, Services", tags:"apple operations supply hardware", stats:{vision:85,engineering:75,business:99,design:80,execution:99,impact:95}, bio:"A supply chain mastermind, Tim Cook cleaned up Apple's manufacturing logistics under Steve Jobs before succeeding him as CEO. Under Cook's leadership, Apple launched the Apple Watch and AirPods, drastically expanded its Services division, transitioned to custom Apple Silicon, and became the first U.S. company to reach a $1, $2, and $3 trillion market cap.", achs:[{i:"📈",t:"Led Apple to become a $3 Trillion company"},{i:"⌚",t:"Launched Apple Watch & AirPods"},{i:"⚙️",t:"Architected the transition to custom Apple Silicon"},{i:"🔒",t:"Pivoted Apple into a privacy-first brand"}], career:[{y:"1982",c:"IBM",n:"Spent 12 years in PC business logistics"},{y:"1998",c:"Apple",n:"Joined as SVP of Worldwide Operations"},{y:"2011",c:"Apple",n:"Named CEO exactly 6 weeks before Jobs died"},{y:"2020",c:"Apple",n:"Announced the Apple Silicon M1 transition"}] },
  { id:"dell", name:"Michael Dell", role:"founder", rolel:"Founder / CEO", company:"Dell", country:"USA", flag:"🇺🇸", rating:91, tier:"pro", model:"assets/models/dell.glb", dob:"Feb 23, 1965", birth:"Houston, TX", edu:"UT Austin (Drop)", domain:"Hardware, Supply Chain", notable:"Dell Technologies", tags:"dell hardware pc enterprise", stats:{vision:88,engineering:75,business:98,design:70,execution:97,impact:92}, bio:"Starting out building upgrade kits in his college dorm room, Michael Dell revolutionized the computer hardware industry by bypassing middlemen and selling custom-built PCs directly to consumers. He orchestrated a massive corporate turnaround by taking Dell private in 2013, followed by the $67 billion acquisition of EMC, the largest tech acquisition in history at the time.", achs:[{i:"🖥️",t:"Pioneered the direct-sales model for PCs"},{i:"📦",t:"Executed the massive $67B EMC acquisition"},{i:"📉",t:"Successfully took Dell private, then public again"},{i:"🏢",t:"Built a dominant enterprise IT infrastructure giant"}], career:[{y:"1984",c:"PC's Limited",n:"Founded company in his UT Austin dorm room"},{y:"1992",c:"Dell",n:"Became youngest CEO of a Fortune 500 company"},{y:"2013",c:"Dell",n:"Took the company private in a $24.4B buyout"},{y:"2016",c:"Dell Technologies",n:"Completed acquisition of EMC Corporation"}] },
  { id:"dorsey", name:"Jack Dorsey", role:"founder", rolel:"Founder / CEO", company:"Block (Square)", country:"USA", flag:"🇺🇸", rating:90, tier:"rising", model:"assets/models/dorsey.glb", dob:"Nov 19, 1976", birth:"St. Louis, MO", edu:"NYU (Drop)", domain:"Social Media, Fintech", notable:"Twitter, Square", tags:"twitter block crypto payments", stats:{vision:93,engineering:80,business:85,design:88,execution:82,impact:92}, bio:"Jack Dorsey is a dual-threat tech founder who co-created Twitter (microblogging) and Square/Block (financial services). Known for his minimalist design aesthetic and interest in decentralized protocols, he heavily impacted both global communication and small-business commerce. He has since shifted his focus almost entirely to Bitcoin and decentralized tech like Bluesky.", achs:[{i:"🐦",t:"Co-founded <strong>Twitter</strong>, defining microblogging"},{i:"💳",t:"Created Square to democratize card payments"},{i:"💰",t:"Launched Cash App, a dominant mobile wallet"},{i:"⛓️",t:"Funded Bluesky, a decentralized social protocol"}], career:[{y:"2006",c:"Twitter",n:'Sent the first tweet: "just setting up my twttr"'},{y:"2008",c:"Twitter",n:"Pushed out of CEO role (later returned in 2015)"},{y:"2009",c:"Square",n:"Founded Square (now Block)"},{y:"2021",c:"Twitter",n:"Resigned as CEO of Twitter permanently"}] },
  { id:"ek", name:"Daniel Ek", role:"founder", rolel:"Co-Founder / CEO", company:"Spotify", country:"Sweden", flag:"🇸🇪", rating:89, tier:"rising", model:"assets/models/ek.glb", dob:"Feb 21, 1983", birth:"Stockholm, Sweden", edu:"KTH (Drop)", domain:"Audio Streaming", notable:"Spotify", tags:"spotify music streaming sweden", stats:{vision:93,engineering:85,business:88,design:85,execution:90,impact:91}, bio:'A serial entrepreneur from Sweden, Daniel Ek saved the global music industry from the depths of the piracy era (Napster/Limewire) by founding Spotify. He pioneered the legal, frictionless "freemium" streaming model, convincing notoriously stubborn record labels to license their music to a tech startup, fundamentally changing how humanity consumes audio.', achs:[{i:"🎵",t:"Pioneered the legal music streaming model"},{i:"🎧",t:"Scaled Spotify to over 600 Million users"},{i:"💿",t:"Saved the music industry from piracy collapse"},{i:"📱",t:"Led massive antitrust pushback against Apple"}], career:[{y:"2006",c:"Advertigo",n:"Sold his ad company to TradeDoubler"},{y:"2006",c:"Spotify",n:"Co-founded Spotify with Martin Lorentzon"},{y:"2008",c:"Spotify",n:"Launched the service in Europe after securing labels"},{y:"2018",c:"Spotify",n:"Led company to a Direct Listing IPO"}] },
  { id:"ellison", name:"Larry Ellison", role:"founder", rolel:"Co-Founder", company:"Oracle", country:"USA", flag:"🇺🇸", rating:94, tier:"pro", model:"assets/models/ellison.glb", dob:"Aug 17, 1944", birth:"New York, NY", edu:"U. Chicago (Drop)", domain:"Databases, Enterprise", notable:"Oracle Database", tags:"oracle database enterprise b2b", stats:{vision:90,engineering:85,business:99,design:65,execution:96,impact:94}, bio:"Inspired by an Edgar F. Codd paper on relational database theory, Larry Ellison built the first commercial SQL database. Oracle became the absolute backbone of enterprise software, managing the data of the world's largest corporations and governments. Famous for his aggressive, cutthroat business tactics, he is one of the wealthiest people in modern history.", achs:[{i:"🗄️",t:"Built the first commercial SQL relational database"},{i:"💼",t:"Scaled Oracle to absolute enterprise B2B dominance"},{i:"⛵",t:"Won the America's Cup sailing race multiple times"},{i:"☁️",t:"Architected early cloud investments (NetSuite)"}], career:[{y:"1977",c:"SDL",n:"Co-founded Software Development Labs (later Oracle)"},{y:"1979",c:"Oracle",n:"Released Oracle V2, the first commercial SQL DB"},{y:"2014",c:"Oracle",n:"Stepped down as CEO, became Exec Chairman & CTO"},{y:"2018",c:"Tesla",n:"Joined the Tesla Board of Directors"}] },
  { id:"gates", name:"Bill Gates", role:"founder", rolel:"Founder / Developer", company:"Microsoft", country:"USA", flag:"🇺🇸", rating:98, tier:"legend", model:"assets/models/gates.glb", dob:"Oct 28, 1955", birth:"Seattle, WA", edu:"Harvard (Drop)", domain:"Software, Philanthropy", notable:"Windows, MS-DOS", tags:"microsoft windows pc philanthropy", stats:{vision:95,engineering:90,business:99,design:70,execution:98,impact:99}, bio:"Bill Gates wrote the Altair BASIC interpreter before dropping out of Harvard to found Microsoft. He secured a legendary contract to provide MS-DOS to IBM, eventually driving the personal computer revolution with the Windows operating system. After dominating the software industry, he stepped down to focus his massive fortune entirely on global health and philanthropy.", achs:[{i:"🪟",t:"Launched Windows 95, cementing global PC dominance"},{i:"💼",t:"Created Microsoft Office, the business standard"},{i:"🌍",t:"Founded the Gates Foundation to eradicate diseases"},{i:"📈",t:"World's Richest Person for over a decade"}], career:[{y:"1975",c:"Microsoft",n:"Founded Micro-Soft with Paul Allen"},{y:"1980",c:"IBM",n:"Secured pivotal contract for MS-DOS"},{y:"2000",c:"Microsoft",n:"Stepped down as CEO, handing reins to Steve Ballmer"},{y:"2008",c:"Gates Foundation",n:"Transitioned to full-time philanthropy"}] },
  { id:"hassabis", name:"Demis Hassabis", role:"visionary", rolel:"Co-Founder / CEO", company:"DeepMind", country:"UK", flag:"🇬🇧", rating:92, tier:"pro", model:"assets/models/hassabis.glb", dob:"Jul 27, 1976", birth:"London, UK", edu:"UCL (PhD)", domain:"Artificial Intelligence", notable:"AlphaGo, AlphaFold", tags:"deepmind ai science nobel", stats:{vision:97,engineering:95,business:75,design:70,execution:94,impact:95}, bio:'A former child chess prodigy and video game designer (Theme Park), Demis Hassabis earned a PhD in cognitive neuroscience before co-founding DeepMind. His goal was to "solve intelligence, and then use that to solve everything else." His team built AlphaGo, which shocked the world by defeating a Go champion, and AlphaFold, which solved the 50-year-old protein folding problem.', achs:[{i:"♟️",t:"Created <strong>AlphaGo</strong> to defeat world champion Lee Sedol"},{i:"🧬",t:"Solved protein folding structures with <strong>AlphaFold</strong>"},{i:"🏅",t:"Awarded the Nobel Prize in Chemistry (2024)"},{i:"🧠",t:"Bridged neuroscience with deep reinforcement learning"}], career:[{y:"1994",c:"Bullfrog",n:"Co-designed the hit game Theme Park at age 17"},{y:"2009",c:"UCL",n:"Completed PhD in Cognitive Neuroscience"},{y:"2010",c:"DeepMind",n:"Co-founded the AI lab in London"},{y:"2014",c:"Google",n:"DeepMind acquired by Google for $500M"}] },
  { id:"hastings", name:"Reed Hastings", role:"founder", rolel:"Co-Founder", company:"Netflix", country:"USA", flag:"🇺🇸", rating:92, tier:"pro", model:"assets/models/hastings.glb", dob:"Oct 8, 1960", birth:"Boston, MA", edu:"Stanford Univ.", domain:"Streaming, Media", notable:"Netflix", tags:"netflix streaming media culture", stats:{vision:96,engineering:80,business:94,design:80,execution:95,impact:94}, bio:'Frustrated by a Blockbuster late fee, Reed Hastings co-founded Netflix as a DVD-by-mail service. Displaying extreme foresight, he actively cannibalized his own DVD business to pioneer internet video streaming. He also revolutionized corporate culture with the famous "Netflix Culture Deck," emphasizing radical candor, high talent density, and anti-bureaucracy.', achs:[{i:"📺",t:"Created the internet video streaming industry"},{i:"🎬",t:"Pioneered original binge-watch streaming content"},{i:"📚",t:'Authored the highly influential "Netflix Culture Deck"'},{i:"📉",t:"Successfully bankrupted Blockbuster video"}], career:[{y:"1991",c:"Pure Software",n:"Founded first company (troubleshooting tools)"},{y:"1997",c:"Netflix",n:"Co-founded company with Marc Randolph"},{y:"2007",c:"Netflix",n:"Launched the digital streaming service"},{y:"2023",c:"Netflix",n:"Stepped down as co-CEO to Executive Chairman"}] },
  { id:"hoffman", name:"Reid Hoffman", role:"founder", rolel:"Co-Founder", company:"LinkedIn", country:"USA", flag:"🇺🇸", rating:90, tier:"rising", model:"assets/models/hoffman.glb", dob:"Aug 5, 1967", birth:"Stanford, CA", edu:"Oxford Univ.", domain:"Social Media, VC", notable:"LinkedIn, Greylock", tags:"linkedin networking vc ai", stats:{vision:92,engineering:70,business:95,design:75,execution:88,impact:92}, bio:'A central figure of the "PayPal Mafia," Reid Hoffman created LinkedIn, effectively digitizing professional networking globally. Beyond LinkedIn, he is known as one of the most connected and strategic venture capitalists in Silicon Valley as a partner at Greylock. He was an early board member of OpenAI and recently co-founded Inflection AI.', achs:[{i:"👔",t:"Founded LinkedIn, the professional network"},{i:"🧠",t:"Crucial early investor and board member at OpenAI"},{i:"💰",t:"Key partner at venture firm Greylock"},{i:"✍️",t:'Author of "The Startup of You" and "Blitzscaling"'}], career:[{y:"2000",c:"PayPal",n:'Joined as COO, becoming part of the "PayPal Mafia"'},{y:"2002",c:"LinkedIn",n:"Co-founded the professional network"},{y:"2016",c:"Microsoft",n:"Sold LinkedIn to Microsoft for $26.2 Billion"},{y:"2022",c:"Inflection AI",n:"Co-founded artificial intelligence studio"}] },
  { id:"houston", name:"Drew Houston", role:"founder", rolel:"Co-Founder / CEO", company:"Dropbox", country:"USA", flag:"🇺🇸", rating:86, tier:"rising", model:"assets/models/houston.glb", dob:"Mar 4, 1983", birth:"Acton, MA", edu:"MIT", domain:"Cloud Storage", notable:"Dropbox", tags:"dropbox cloud storage sync", stats:{vision:88,engineering:85,business:85,design:86,execution:88,impact:87}, bio:'Tired of forgetting his USB flash drive while taking the bus in Boston, Drew Houston wrote the original code for Dropbox. He applied to Y Combinator, partnered with Arash Ferdowsi, and successfully popularized the seamless "it just works" magic folder cloud sync model, rejecting an acquisition offer from Steve Jobs along the way.', achs:[{i:"📁",t:"Popularized seamless consumer cloud sync"},{i:"📈",t:"Scaled Dropbox to over 700 Million users"},{i:"🤝",t:"Pioneered the modern viral referral growth model"},{i:"❌",t:"Famously turned down acquisition by Steve Jobs"}], career:[{y:"2007",c:"Dropbox",n:"Founded company and entered Y Combinator"},{y:"2008",c:"TechCrunch50",n:"Publicly launched with a legendary demo video"},{y:"2018",c:"Dropbox",n:"Led company to a successful IPO"},{y:"2020",c:"Meta",n:"Joined the Board of Directors of Meta (Facebook)"}] },
  { id:"huang", name:"Jensen Huang", role:"architect", rolel:"Founder / CEO", company:"NVIDIA", country:"Taiwan", flag:"🇹🇼", rating:95, tier:"elite", model:"assets/models/huang.glb", dob:"Feb 17, 1963", birth:"Tainan, Taiwan", edu:"Stanford Univ.", domain:"Hardware, AI", notable:"GPUs, CUDA", tags:"nvidia gpu ai hardware", stats:{vision:97,engineering:95,business:94,design:75,execution:96,impact:96}, bio:"Meeting at a Denny's restaurant, Jensen Huang co-founded NVIDIA to bring 3D graphics to the PC. He oversaw the invention of the Graphics Processing Unit (GPU). Realizing GPUs were perfect for massive parallel math, he pushed the CUDA architecture. This strategic pivot positioned NVIDIA as the foundational hardware monopoly powering the modern AI revolution.", achs:[{i:"🎮",t:"Invented the modern GPU (Graphics Processing Unit)"},{i:"🤖",t:"Created CUDA, enabling the deep learning AI boom"},{i:"📈",t:"Led NVIDIA to become the world's most valuable company"},{i:"🧥",t:"Famous for his signature black leather jacket"}], career:[{y:"1993",c:"NVIDIA",n:"Co-founded company at a Denny's diner"},{y:"1999",c:"NVIDIA",n:"Invented the GPU with the release of the GeForce 256"},{y:"2006",c:"NVIDIA",n:"Introduced CUDA architecture for parallel computing"},{y:"2024",c:"NVIDIA",n:"Company briefly surpassed $3T, leading the market"}] },
  { id:"jobs", name:"Steve Jobs", role:"founder", rolel:"Founder / CEO", company:"Apple", country:"USA", flag:"🇺🇸", rating:99, tier:"legend", model:"assets/models/jobs.glb", dob:"Feb 24, 1955", birth:"San Francisco, CA", edu:"Reed College (Drop)", domain:"Consumer Electronics", notable:"iPhone, Mac, Pixar", tags:"apple iphone mac pixar design", stats:{vision:99,engineering:65,business:95,design:99,execution:90,impact:99}, bio:"Steve Jobs was the visionary co-founder of Apple Inc. Known for his reality distortion field and uncompromising focus on design and user experience, he oversaw the creation of the Macintosh, iPod, iPhone, and iPad. He fundamentally shifted how humanity interacts with computers, phones, music, and animated movies (via Pixar).", achs:[{i:"📱",t:"Unveiled the <strong>iPhone</strong> (2007), redefining mobile phones"},{i:"🖥️",t:"Introduced the <strong>Macintosh</strong> (1984), popularizing the GUI"},{i:"🎬",t:"Funded and shaped <strong>Pixar Animation Studios</strong>"},{i:"🎵",t:"Transformed the music industry with iPod & iTunes"}], career:[{y:"1976",c:"Apple",n:"Co-founded Apple with Steve Wozniak"},{y:"1985",c:"NeXT",n:"Ousted from Apple; founded NeXT Computer"},{y:"1997",c:"Apple",n:"Returned to Apple as CEO, saving it from bankruptcy"},{y:"2011",c:"Apple",n:"Passed away due to pancreatic cancer"}] },
  { id:"kalanick", name:"Travis Kalanick", role:"founder", rolel:"Co-Founder", company:"Uber", country:"USA", flag:"🇺🇸", rating:89, tier:"rising", model:"assets/models/kalanick.glb", dob:"Aug 6, 1976", birth:"Los Angeles, CA", edu:"UCLA (Drop)", domain:"Transportation, Gig Economy", notable:"Uber", tags:"uber rideshare logistics", stats:{vision:94,engineering:70,business:90,design:75,execution:95,impact:93}, bio:'A fiercely competitive founder, Travis Kalanick aggressively expanded Uber across the globe, battling regulators, taxi unions, and competitors in every city. Under his leadership, Uber created the modern ride-sharing industry and established the framework for the "gig economy," before cultural controversies led to his resignation.', achs:[{i:"🚗",t:"Created the global ride-sharing industry"},{i:"🍔",t:"Pioneered food logistics with UberEats"},{i:"🌎",t:"Scaled operations to over 70 countries"},{i:"🏢",t:"Founded CloudKitchens (Ghost Kitchens)"}], career:[{y:"1998",c:"Scour",n:"Co-founded peer-to-peer file sharing app"},{y:"2009",c:"Ubercap",n:"Co-founded black car service with Garrett Camp"},{y:"2017",c:"Uber",n:"Resigned as CEO following investor pressure"},{y:"2018",c:"CloudKitchens",n:"Began heavily investing in dark kitchens"}] },
  { id:"luckey", name:"Palmer Luckey", role:"founder", rolel:"Founder", company:"Anduril / Oculus", country:"USA", flag:"🇺🇸", rating:87, tier:"rising", model:"assets/models/luckey.glb", dob:"Sep 19, 1992", birth:"Long Beach, CA", edu:"CSULB (Drop)", domain:"VR, Defense Tech", notable:"Oculus Rift, Anduril", tags:"oculus anduril vr defense hardware", stats:{vision:93,engineering:90,business:82,design:80,execution:88,impact:89}, bio:"A self-taught hardware hacker, Palmer Luckey kickstarted the modern Virtual Reality revolution by building the Oculus Rift prototypes in his parents' garage. After selling Oculus to Facebook, he shifted focus to national security, founding Anduril Industries to disrupt traditional defense contractors with AI-powered drones and software.", achs:[{i:"🥽",t:"Created the Oculus Rift, reviving the VR industry"},{i:"🛡️",t:"Built Anduril into a massive defense tech unicorn"},{i:"💰",t:"Sold Oculus to Facebook for $2 Billion at age 21"},{i:"🚁",t:"Pioneered autonomous AI drone systems for military use"}], career:[{y:"2012",c:"Oculus VR",n:"Launched massive Kickstarter for the Rift headset"},{y:"2014",c:"Facebook",n:"Company acquired by Mark Zuckerberg"},{y:"2017",c:"Anduril",n:"Founded defense tech company"},{y:"2022",c:"Anduril",n:"Secured massive SOCOM contract for anti-drone tech"}] },
  { id:"jackma", name:"Jack Ma", role:"founder", rolel:"Co-Founder", company:"Alibaba", country:"China", flag:"🇨🇳", rating:93, tier:"pro", model:"assets/models/jackma.glb", dob:"Sep 10, 1964", birth:"Hangzhou, China", edu:"Hangzhou Normal", domain:"E-Commerce, Fintech", notable:"Alibaba, Ant Group", tags:"alibaba ecommerce china fintech", stats:{vision:94,engineering:50,business:99,design:70,execution:96,impact:95}, bio:"A former English teacher who failed the college entrance exam twice, Jack Ma discovered the internet on a trip to the US and returned to build Alibaba in his apartment. He built Alibaba into a dominant global e-commerce and technology conglomerate, and launched Alipay, revolutionizing digital payments in China.", achs:[{i:"🛒",t:"Created Alibaba & Taobao, dominating Chinese e-commerce"},{i:"💳",t:"Founded Alipay (Ant Group) for digital payments"},{i:"📈",t:"Executed a record-breaking $25B IPO in New York"},{i:"🧑‍🏫",t:"Became the global face of Chinese tech entrepreneurship"}], career:[{y:"1995",c:"China Pages",n:"Created one of China's first internet websites"},{y:"1999",c:"Alibaba",n:"Founded B2B marketplace with 17 friends"},{y:"2014",c:"Alibaba",n:"Company went public on NYSE"},{y:"2020",c:"Ant Group",n:"IPO halted by Chinese regulators; Ma stepped back"}] },
  { id:"ponyma", name:"Pony Ma", role:"founder", rolel:"Co-Founder / CEO", company:"Tencent", country:"China", flag:"🇨🇳", rating:93, tier:"pro", model:"assets/models/ponyma.glb", dob:"Oct 29, 1971", birth:"Guangdong, China", edu:"Shenzhen Univ.", domain:"Gaming, Social Media", notable:"WeChat, Tencent", tags:"tencent wechat gaming china", stats:{vision:92,engineering:85,business:98,design:88,execution:97,impact:95}, bio:'Known for his low-profile engineering approach, Pony Ma co-founded Tencent. Starting with the PC messenger OICQ (QQ), he transitioned the company to mobile with WeChat, creating an indispensable "super app" that runs daily life in China. Under his guidance, Tencent also became the largest video game publisher in the world.', achs:[{i:"💬",t:"Created WeChat, the ultimate Chinese super-app"},{i:"🎮",t:"Built the world's largest video game empire"},{i:"🐧",t:"Created QQ, China's original instant messenger"},{i:"📈",t:"Scaled Tencent to a top-10 global company by market cap"}], career:[{y:"1998",c:"Tencent",n:"Co-founded company in Shenzhen"},{y:"1999",c:"OICQ",n:"Launched PC messenger (later renamed QQ)"},{y:"2011",c:"WeChat",n:"Launched mobile messaging app"},{y:"2015",c:"Tencent",n:"Acquired Riot Games (League of Legends) completely"}] },
  { id:"moskovitz", name:"Dustin Moskovitz", role:"founder", rolel:"Co-Founder / CEO", company:"Asana / Facebook", country:"USA", flag:"🇺🇸", rating:85, tier:"rising", model:"assets/models/moskovitz.glb", dob:"May 22, 1984", birth:"Gainesville, FL", edu:"Harvard (Drop)", domain:"Social Media, Productivity", notable:"Asana, Facebook", tags:"facebook asana work productivity", stats:{vision:85,engineering:88,business:85,design:80,execution:90,impact:88}, bio:"Mark Zuckerberg's Harvard roommate, Dustin Moskovitz taught himself PHP to help build Facebook, serving as its first Chief Technology Officer. He later left to co-found Asana, a work management platform designed to cure the work about work problem. He is also a major philanthropist via Good Ventures.", achs:[{i:"🌐",t:"Co-founded Facebook as its first CTO"},{i:"✅",t:"Founded Asana for enterprise productivity"},{i:"🌍",t:"Founded Good Ventures for effective altruism"},{i:"💻",t:"Helped rewrite Facebook's architecture to scale"}], career:[{y:"2004",c:"Facebook",n:"Co-founded network with Mark Zuckerberg"},{y:"2008",c:"Asana",n:"Left Facebook to build workplace productivity tools"},{y:"2011",c:"Good Ventures",n:"Established philanthropic foundation"},{y:"2020",c:"Asana",n:"Led Asana to a public Direct Listing"}] },
  { id:"musk", name:"Elon Musk", role:"visionary", rolel:"CEO / Chief Eng.", company:"Tesla / SpaceX", country:"South Africa", flag:"🇿🇦", rating:96, tier:"elite", model:"assets/models/musk.glb", dob:"Jun 28, 1971", birth:"Pretoria, SA", edu:"UPenn", domain:"Aerospace, EVs", notable:"Falcon 9, Model 3, X", tags:"tesla spacex x twitter neuralink ev", stats:{vision:99,engineering:88,business:92,design:80,execution:90,impact:97}, bio:"Elon Musk is an intensely driven entrepreneur who has disrupted multiple massive industries: online payments (PayPal), automotive (Tesla), and aerospace (SpaceX). His engineering-first approach and willingness to tackle seemingly impossible physics problems have made him the most prominent, wealthy, and controversial tech figure of the 21st century.", achs:[{i:"🚀",t:"Built the first reusable orbital-class rockets (Falcon 9)"},{i:"🚗",t:"Accelerated global EV transition via Tesla"},{i:"🛰️",t:"Deployed Starlink global satellite internet"},{i:"🐦",t:"Acquired Twitter and rebranded it to X"}], career:[{y:"1999",c:"X.com",n:"Co-founded online bank which became PayPal"},{y:"2002",c:"SpaceX",n:"Founded to reduce space transportation costs"},{y:"2004",c:"Tesla",n:"Invested and took over EV startup as CEO"},{y:"2022",c:"X (Twitter)",n:"Purchased the social platform for $44 Billion"}] },
  { id:"nadella", name:"Satya Nadella", role:"visionary", rolel:"CEO", company:"Microsoft", country:"USA", flag:"🇺🇸", rating:94, tier:"pro", model:"assets/models/nadella.glb", dob:"Aug 19, 1967", birth:"Hyderabad, India", edu:"UW-Milwaukee", domain:"Cloud, Enterprise AI", notable:"Azure, OpenAI Partnership", tags:"microsoft azure ai cloud enterprise", stats:{vision:95,engineering:88,business:98,design:75,execution:97,impact:96}, bio:"Satya Nadella executed one of the greatest corporate turnarounds in history. Taking over a stagnant Microsoft, he shifted the company culture away from toxic infighting and pivoted the business entirely toward cloud computing (Azure) and open-source. His massive, early investment in OpenAI positioned Microsoft at the forefront of the generative AI boom.", achs:[{i:"☁️",t:"Scaled Microsoft Azure into a cloud titan"},{i:"🤝",t:"Executed $13B strategic partnership with OpenAI"},{i:"🔄",t:"Changed MSFT culture to embrace open-source/Linux"},{i:"📈",t:"Returned Microsoft to the most valuable company globally"}], career:[{y:"1992",c:"Microsoft",n:"Joined company as an engineer"},{y:"2011",c:"Microsoft",n:"Made President of Server and Tools Division"},{y:"2014",c:"Microsoft",n:"Appointed CEO, succeeding Steve Ballmer"},{y:"2019",c:"OpenAI",n:"Initiated first massive investment in OpenAI"}] },
  { id:"nakamoto", name:"Satoshi Nakamoto", role:"architect", rolel:"Creator", company:"Bitcoin", country:"Unknown", flag:"🏳️", rating:98, tier:"legend", model:"assets/models/nakamoto.glb", dob:"Unknown", birth:"Unknown", edu:"Unknown", domain:"Cryptography", notable:"Bitcoin, Blockchain", tags:"bitcoin crypto blockchain money", stats:{vision:99,engineering:99,business:50,design:50,execution:95,impact:99}, bio:"The pseudonymous creator of Bitcoin and the first blockchain database. Nakamoto solved the double-spending problem for digital currency using a decentralized peer-to-peer network and a Proof-of-Work consensus mechanism. After releasing the software and guiding the early community, Nakamoto handed over the source code repository and vanished in 2010.", achs:[{i:"🪙",t:"Invented Bitcoin, the first decentralized cryptocurrency"},{i:"⛓️",t:"Created the first functional Blockchain database"},{i:"🔐",t:"Solved the Byzantine Generals Problem for digital cash"},{i:"👻",t:"Successfully maintained complete anonymity"}], career:[{y:"2008",c:"Cryptography Mailing List",n:"Published the Bitcoin Whitepaper"},{y:"2009",c:"Bitcoin",n:"Mined the Genesis Block (Block 0)"},{y:"2010",c:"Bitcoin",n:"Sent final forum post and disappeared completely"}] },
  { id:"omidyar", name:"Pierre Omidyar", role:"founder", rolel:"Founder", company:"eBay", country:"France", flag:"🇫🇷", rating:88, tier:"rising", model:"assets/models/omidyar.glb", dob:"Jun 21, 1967", birth:"Paris, France", edu:"Tufts Univ.", domain:"E-Commerce", notable:"eBay, Omidyar Network", tags:"ebay ecommerce auction philanthropy", stats:{vision:90,engineering:85,business:88,design:75,execution:85,impact:90}, bio:"Over a long weekend in 1995, Pierre Omidyar wrote the code for AuctionWeb, which would become eBay. He proved that anonymous strangers on the internet could trust each other for global commerce if a reputation system was in place. A billionaire by age 31, he has since dedicated his wealth to philanthropy and investigative journalism via the Omidyar Network.", achs:[{i:"🔨",t:"Created eBay, the first global online auction"},{i:"🤝",t:"Pioneered digital user reputation/trust systems"},{i:"🌍",t:"Founded Omidyar Network for philanthropic impact"},{i:"📰",t:"Funded First Look Media (The Intercept)"}], career:[{y:"1991",c:"Ink Development",n:"Co-founded pen-computing startup"},{y:"1995",c:"eBay",n:"Launched AuctionWeb from his personal site"},{y:"1998",c:"eBay",n:"Led successful IPO, becoming a billionaire"},{y:"2004",c:"Omidyar Network",n:"Established philanthropic investment firm"}] },
  { id:"page", name:"Larry Page", role:"founder", rolel:"Co-Founder", company:"Alphabet (Google)", country:"USA", flag:"🇺🇸", rating:96, tier:"elite", model:"assets/models/page.glb", dob:"Mar 26, 1973", birth:"Lansing, MI", edu:"Stanford Univ.", domain:"Search, Data", notable:"PageRank Algorithm", tags:"google search algorithm", stats:{vision:95,engineering:94,business:90,design:75,execution:92,impact:98}, bio:"As a PhD student at Stanford, Larry Page theorized that the entire World Wide Web could be organized by analyzing link structures, leading to the creation of the PageRank algorithm and Google. As CEO, he championed massive, ambitious acquisitions (like Android and YouTube) and restructured the company into Alphabet to pursue futuristic technologies.", achs:[{i:"🔍",t:"Invented the PageRank algorithm"},{i:"🌐",t:"Co-founded Google to organize world information"},{i:"📱",t:"Acquired and championed the Android OS"},{i:"🔤",t:"Architected the Alphabet corporate restructuring"}], career:[{y:"1996",c:"Stanford",n:"Began the BackRub search engine project"},{y:"1998",c:"Google",n:"Co-founded Google with Sergey Brin"},{y:"2011",c:"Google",n:"Took over as CEO from Eric Schmidt"},{y:"2015",c:"Alphabet",n:"Became CEO of the new parent company (until 2019)"}] },
  { id:"pichai", name:"Sundar Pichai", role:"visionary", rolel:"CEO", company:"Alphabet (Google)", country:"USA", flag:"🇺🇸", rating:92, tier:"pro", model:"assets/models/pichai.glb", dob:"Jun 10, 1972", birth:"Madurai, India", edu:"Stanford Univ.", domain:"Web, Search, AI", notable:"Chrome, Android", tags:"google chrome android ai", stats:{vision:90,engineering:90,business:92,design:85,execution:94,impact:95}, bio:'A brilliant product manager, Sundar Pichai led the development of the Google Toolbar and Google Chrome, fighting off Microsoft Internet Explorer to make Chrome the world\'s dominant browser. He later oversaw the Android ecosystem before being appointed CEO of Google, where he has declared the company an "AI-first" organization.', achs:[{i:"🌐",t:"Created Google Chrome, the #1 web browser"},{i:"📱",t:"Oversaw global Android OS expansion"},{i:"🧠",t:'Pivoted Google to an "AI-first" company'},{i:"📈",t:"Navigated massive antitrust scrutiny as CEO"}], career:[{y:"2004",c:"Google",n:"Joined to lead product management for Toolbar"},{y:"2008",c:"Google Chrome",n:"Successfully launched the Chrome browser"},{y:"2013",c:"Android",n:"Took over the Android division from Andy Rubin"},{y:"2015",c:"Google",n:"Appointed CEO (later Alphabet CEO in 2019)"}] },
  { id:"spiegel", name:"Evan Spiegel", role:"founder", rolel:"Co-Founder / CEO", company:"Snap Inc.", country:"USA", flag:"🇺🇸", rating:87, tier:"rising", model:"assets/models/spiegel.glb", dob:"Jun 4, 1990", birth:"Los Angeles, CA", edu:"Stanford (Drop)", domain:"Social Media, AR", notable:"Snapchat, AR Lenses", tags:"snapchat ar social hardware", stats:{vision:92,engineering:75,business:82,design:90,execution:85,impact:89}, bio:'Evan Spiegel popularized ephemeral messaging (disappearing photos) and the "Stories" format with Snapchat, fundamentally shifting social media away from permanent, curated feeds. A product and design obsessive, he has aggressively pushed Snap into consumer hardware and Augmented Reality (AR) lenses, betting on a post-smartphone future.', achs:[{i:"👻",t:'Pioneered ephemeral messaging and "Stories"'},{i:"👓",t:"Pushed consumer AR with Spectacles hardware"},{i:"🤳",t:"Mainstreamed Augmented Reality face filters"},{i:"❌",t:"Turned down a $3B acquisition offer from Facebook"}], career:[{y:"2011",c:"Picaboo",n:"Launched app from Stanford dorm (renamed Snapchat)"},{y:"2013",c:"Snapchat",n:'Launched "Stories" feature'},{y:"2016",c:"Snap Inc.",n:"Rebranded company and launched Spectacles"},{y:"2017",c:"Snap",n:"Led company to IPO"}] },
  { id:"su", name:"Lisa Su", role:"architect", rolel:"CEO", company:"AMD", country:"USA", flag:"🇺🇸", rating:93, tier:"pro", model:"assets/models/su.glb", dob:"Nov 7, 1969", birth:"Tainan, Taiwan", edu:"MIT", domain:"Semiconductors", notable:"Ryzen Architecture", tags:"amd chips hardware semiconductors", stats:{vision:92,engineering:98,business:95,design:70,execution:98,impact:94}, bio:"Lisa Su is an elite electrical engineer who orchestrated one of the greatest corporate turnarounds in tech history. Taking over a near-bankrupt AMD, she refocused the company entirely on high-performance computing. By launching the Zen microarchitecture (Ryzen/Epyc), she saved AMD and successfully challenged Intel's absolute monopoly in PC and server chips.", achs:[{i:"💻",t:"Architected the Zen (Ryzen) processor lineup"},{i:"📈",t:"Saved AMD from the brink of bankruptcy"},{i:"⚡",t:"Pioneered copper chip interconnects (at IBM)"},{i:"⚔️",t:"Broke Intel's monopoly in desktop and server CPUs"}], career:[{y:"1995",c:"IBM",n:"Worked as researcher on semiconductor tech"},{y:"2012",c:"AMD",n:"Joined as SVP and General Manager"},{y:"2014",c:"AMD",n:"Appointed CEO to lead turnaround"},{y:"2017",c:"AMD",n:"Released the first Ryzen processors"}] },
  { id:"sweeney", name:"Tim Sweeney", role:"engineer", rolel:"Founder / CEO", company:"Epic Games", country:"USA", flag:"🇺🇸", rating:88, tier:"rising", model:"assets/models/sweeney.glb", dob:"Dec 19, 1970", birth:"Potomac, MD", edu:"Univ. Maryland (Drop)", domain:"Gaming, Game Engines", notable:"Unreal Engine, Fortnite", tags:"epic unreal gaming 3d engine", stats:{vision:92,engineering:96,business:85,design:80,execution:88,impact:90}, bio:"Tim Sweeney programmed the original Unreal Engine, providing the 3D physics and rendering framework that powers countless video games, virtual production movies, and industrial designs today. Under Epic Games, he also launched the cultural phenomenon Fortnite, using its massive success to launch antitrust lawsuits against Apple and Google's app store monopolies.", achs:[{i:"⚙️",t:"Created the <strong>Unreal Engine</strong>"},{i:"🎮",t:"Launched global phenomenon <strong>Fortnite</strong>"},{i:"⚔️",t:"Spearheaded antitrust litigation against Apple/Google"},{i:"🌲",t:"Donated tens of millions to forest conservation"}], career:[{y:"1991",c:"Epic MegaGames",n:"Founded company from his parents' house"},{y:"1998",c:"Unreal",n:"Released first game using his 3D engine"},{y:"2017",c:"Fortnite",n:"Released Battle Royale mode, grossing billions"},{y:"2020",c:"Epic Games",n:"Sued Apple over 30% App Store fees"}] },
  { id:"systrom", name:"Kevin Systrom", role:"founder", rolel:"Co-Founder", company:"Instagram", country:"USA", flag:"🇺🇸", rating:88, tier:"rising", model:"assets/models/systrom.glb", dob:"Dec 30, 1983", birth:"Holliston, MA", edu:"Stanford Univ.", domain:"Social Media, Photo", notable:"Instagram", tags:"instagram photo social filter", stats:{vision:90,engineering:82,business:80,design:94,execution:88,impact:91}, bio:"An amateur photographer with a sharp eye for aesthetics, Kevin Systrom pivoted a messy check-in app called Burbn into Instagram. By applying filters to low-quality smartphone photos, he made everyone feel like a professional photographer. He defined the visual aesthetic of the 2010s before selling the app to Facebook for $1 Billion.", achs:[{i:"📸",t:"Created Instagram, defining visual social media"},{i:"🎨",t:"Popularized image filters and square-crop aesthetics"},{i:"💰",t:"Executed $1B acquisition by Facebook with 13 employees"},{i:"📰",t:"Founded AI-driven news aggregator Artifact"}], career:[{y:"2006",c:"Google",n:"Worked in product marketing"},{y:"2010",c:"Instagram",n:"Launched the app, hitting 1M users in months"},{y:"2012",c:"Facebook",n:"Company acquired by Mark Zuckerberg"},{y:"2018",c:"Instagram",n:"Resigned from Meta due to creative differences"}] },
  { id:"thiel", name:"Peter Thiel", role:"founder", rolel:"Co-Founder / Investor", company:"Palantir / Founders Fund", country:"USA", flag:"🇺🇸", rating:91, tier:"pro", model:"assets/models/thiel.glb", dob:"Oct 11, 1967", birth:"Frankfurt, Germany", edu:"Stanford Univ.", domain:"Fintech, Data, VC", notable:"PayPal, Palantir", tags:"paypal palantir vc contrarian", stats:{vision:96,engineering:60,business:97,design:65,execution:90,impact:94}, bio:'A contrarian philosopher-investor, Peter Thiel co-founded PayPal, acting as the "Don" of the PayPal Mafia. He made history as the first outside investor in Facebook. He later co-founded Palantir Technologies to bring Silicon Valley software to intelligence agencies, and launched the Thiel Fellowship to encourage young founders to skip college.', achs:[{i:"💳",t:"Co-founded PayPal"},{i:"👁️",t:"Founded Palantir Data Analytics for defense"},{i:"🤝",t:"First outside investor in Facebook ($500k)"},{i:"🏆",t:"Launched Thiel Fellowship (Skip college for $100k)"}], career:[{y:"1998",c:"Confinity",n:"Co-founded cryptography company (became PayPal)"},{y:"2004",c:"Palantir",n:"Co-founded big data analysis firm"},{y:"2004",c:"Facebook",n:"Wrote the first angel check to Mark Zuckerberg"},{y:"2005",c:"Founders Fund",n:"Launched his venture capital firm"}] },
  { id:"torvalds", name:"Linus Torvalds", role:"engineer", rolel:"Software Engineer", company:"Linux Foundation", country:"Finland", flag:"🇫🇮", rating:97, tier:"legend", model:"assets/models/torvalds.glb", dob:"Dec 28, 1969", birth:"Helsinki, Finland", edu:"Univ. of Helsinki", domain:"Operating Systems", notable:"Linux, Git", tags:"linux git kernel opensource", stats:{vision:85,engineering:99,business:40,design:65,execution:95,impact:99}, bio:'As a student, Linus Torvalds wrote a free operating system kernel "just for fun." Today, the Linux kernel powers 100% of the top 500 supercomputers, the majority of the internet\'s servers, and all Android devices. Furthermore, he created Git, the premier version control system used by virtually all software developers globally. He is the ultimate patron saint of Open Source.', achs:[{i:"🐧",t:"Created the <strong>Linux Kernel</strong>"},{i:"🐙",t:"Created <strong>Git</strong> version control in just 2 weeks"},{i:"🔓",t:"Championed the global Open Source software movement"},{i:"🏆",t:"Awarded the Millennium Technology Prize"}], career:[{y:"1991",c:"University of Helsinki",n:"Announced the Linux project on a Usenet group"},{y:"1996",c:"Linux",n:"Adopted Tux the penguin as official mascot"},{y:"2005",c:"OSDL",n:"Created Git to manage Linux source code"},{y:"Present",c:"Linux Foundation",n:"Maintains ultimate authority over kernel code merges"}] },
  { id:"wurman", name:"Richard Saul Wurman", role:"visionary", rolel:"Founder / Architect", company:"TED", country:"USA", flag:"🇺🇸", rating:92, tier:"pro", model:"assets/models/wurman.glb", dob:"Mar 26, 1935", birth:"Philadelphia, PA", edu:"Univ. of Pennsylvania", domain:"Information Architecture", notable:"TED, LATCH Principle", tags:"ted latch architecture information design", stats:{vision:98,engineering:50,business:85,design:99,execution:90,impact:95}, bio:'Richard Saul Wurman is an American architect and graphic designer who famously coined the term "Information Architecture" in 1976. Frustrated by boring academic panels, he founded the TED conference in 1984, establishing the globally recognized platform for Technology, Entertainment, and Design. He also created the LATCH principle (Location, Alphabet, Time, Category, Hierarchy) as the finite ways to organize any information.', achs:[{i:"🗣️",t:"Founded the <strong>TED Conferences</strong> in 1984"},{i:"🏛️",t:"Coined the term <strong>Information Architecture</strong> (1976)"},{i:"🗂️",t:"Developed the <strong>LATCH</strong> organization principle"},{i:"📚",t:"Authored over 90 books on design and information"}], career:[{y:"1959",c:"Architecture",n:"Graduated with highest honors from UPenn"},{y:"1976",c:"AIA",n:'Chaired the AIA conference, coining "Information Architecture"'},{y:"1984",c:"TED",n:"Hosted the first TED conference in Monterey, California"},{y:"2001",c:"TED",n:"Sold the TED conference to the Sapling Foundation"}] },
  { id:"zuck", name:"Mark Zuckerberg", role:"founder", rolel:"Founder / CEO", company:"Meta", country:"USA", flag:"🇺🇸", rating:94, tier:"pro", model:"assets/models/zuck.glb", dob:"May 14, 1984", birth:"New York, USA", edu:"Harvard (Drop)", domain:"Social Media, VR", notable:"Facebook, Meta", tags:"meta facebook vr social", stats:{vision:90,engineering:85,business:95,design:80,execution:94,impact:97}, bio:"Coding from his Harvard dorm room, Mark Zuckerberg created Facebook, connecting billions of people and fundamentally reshaping digital social interaction, advertising, and global politics. Notoriously strategic, he acquired Instagram and WhatsApp, fending off competitors. Recently, he controversially pivoted the entire company to focus on AI and the Metaverse, rebranding to Meta.", achs:[{i:"🌐",t:"Founded Facebook, the largest social network"},{i:"🛒",t:"Executed brilliant acquisitions of Instagram & WhatsApp"},{i:"🥽",t:"Pushed mainstream VR via Oculus/Quest headsets"},{i:"🤖",t:"Open-sourced Llama, a frontier AI model"}], career:[{y:"2004",c:"Facebook",n:"Launched the network (originally TheFacebook)"},{y:"2012",c:"Facebook",n:"Acquired Instagram for $1B and took FB public"},{y:"2014",c:"WhatsApp",n:"Acquired WhatsApp for an astonishing $19B"},{y:"2021",c:"Meta",n:"Rebranded company to focus on spatial computing"}] }
,
  referenceProfile({ id:"vint-cerf", name:"Vint Cerf", role:"scientist", roleLabel:"Computer Scientist", institution:"DARPA / Google", country:"USA", rating:96, dob:"Jun 23, 1943", birth:"New Haven, CT", edu:"Stanford / UCLA", domain:"Internet Architecture, TCP/IP", notable:"TCP/IP, Internet architecture", era:"Internet era", century:"20th-21st centuries", decade:"1970s", livingStatus:"Living", innovationType:"protocol architect", primaryMethod:"Protocol design and standardization", impactLayer:"Infrastructural", taxonomy:["Internet and web","Open source and infrastructure"], bio:"Vint Cerf co-designed TCP/IP with Bob Kahn, creating the protocol foundation for internetworking. His work helped turn separate packet networks into the global internet.", contributions:["Co-designed TCP/IP with Bob Kahn","Shared the 2004 ACM A.M. Turing Award","Helped lead internet standards and governance efforts","Served as a public advocate for open internet architecture"], career:[{y:"1973",c:"DARPA",n:"Began TCP/IP design work with Bob Kahn"},{y:"1983",c:"Internet",n:"TCP/IP became the ARPANET standard"},{y:"2005",c:"Google",n:"Joined Google as Chief Internet Evangelist"}], influenceNetwork:"DARPA, ARPANET, Stanford, UCLA, IETF culture, and later Google.", criticalLens:"Internet architecture enabled openness and innovation but created unresolved tensions around privacy, governance, security, and misinformation.", sources:[{label:"ACM Turing laureate page",url:"https://awards.acm.org/award_winners/cerf_1083211"},{label:"Internet Hall of Fame biography",url:"https://www.internethalloffame.org/inductee/vint-cerf/"}] }),
  referenceProfile({ id:"bob-kahn", name:"Bob Kahn", role:"scientist", roleLabel:"Engineer / Computer Scientist", institution:"DARPA / CNRI", country:"USA", rating:96, dob:"Dec 23, 1938", birth:"New York, NY", edu:"City College of New York / Princeton", domain:"TCP/IP, Networking", notable:"TCP/IP, DARPA internet program", era:"Internet era", century:"20th-21st centuries", decade:"1970s", livingStatus:"Living", innovationType:"protocol architect", primaryMethod:"Protocol design and program leadership", impactLayer:"Infrastructural", taxonomy:["Internet and web","Open source and infrastructure"], bio:"Bob Kahn initiated and co-designed the TCP/IP architecture with Vint Cerf while leading networking research at DARPA. His work made heterogeneous networks interoperable and helped define the internet's core technical model.", contributions:["Co-designed TCP/IP with Vint Cerf","Led DARPA internetting research","Shared the 2004 ACM A.M. Turing Award","Founded CNRI to support networked information infrastructure"], career:[{y:"1972",c:"ARPANET",n:"Organized a major public ARPANET demonstration"},{y:"1973",c:"DARPA",n:"Started internetworking work with Vint Cerf"},{y:"2004",c:"Turing Award",n:"Shared the ACM A.M. Turing Award"}], influenceNetwork:"DARPA, BBN, ARPANET, protocol standards, and digital-object architecture.", criticalLens:"Kahn's infrastructure work shows how public research funding became the substrate for private digital empires.", sources:[{label:"ACM Turing laureate page",url:"https://awards.acm.org/award_winners/kahn_4598637"},{label:"Internet Hall of Fame biography",url:"https://www.internethalloffame.org/inductee/robert-kahn/"}] }),
  referenceProfile({ id:"tim-berners-lee", name:"Tim Berners-Lee", role:"scientist", roleLabel:"Computer Scientist", institution:"CERN / W3C", country:"UK", rating:97, tier:"legend", dob:"Jun 8, 1955", birth:"London, UK", edu:"Queen's College, Oxford", domain:"World Wide Web, Internet", notable:"World Wide Web, HTTP, HTML, URL", era:"Internet era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"systems inventor", primaryMethod:"Systems invention and open standards", impactLayer:"Infrastructural", taxonomy:["Internet and web","Media, communication, and platforms"], bio:"Tim Berners-Lee invented the World Wide Web at CERN, combining URLs, HTTP, HTML, and hypertext into a practical global information system. His decision to make the web openly usable shaped modern communication, publishing, commerce, and knowledge access.", contributions:["Invented the World Wide Web in 1989","Created core web technologies including HTTP, HTML, and URLs","Founded the World Wide Web Consortium","Received the 2016 ACM A.M. Turing Award"], career:[{y:"1989",c:"CERN",n:"Proposed a global hypertext information system"},{y:"1991",c:"Web",n:"Opened the first website to wider access"},{y:"1994",c:"W3C",n:"Founded the World Wide Web Consortium"},{y:"2016",c:"Turing Award",n:"Received the ACM A.M. Turing Award"}], influenceNetwork:"CERN, hypertext research, internet protocols, browser makers, and web standards communities.", criticalLens:"The open web enabled democratic publication, but advertising platforms, tracking, and enclosure challenged the original public-interest vision.", sources:[{label:"ACM Turing laureate page",url:"https://awards.acm.org/award_winners/berners-lee_8087960"},{label:"W3C biography",url:"https://www.w3.org/People/Berners-Lee/"}] }),
  referenceProfile({ id:"radia-perlman", name:"Radia Perlman", role:"engineer", roleLabel:"Network Engineer / Computer Scientist", institution:"Digital Equipment Corporation / Dell EMC", country:"USA", rating:93, dob:"Dec 18, 1951", birth:"Portsmouth, VA", edu:"MIT", domain:"Networking, Protocol Design", notable:"Spanning Tree Protocol", era:"Internet era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"protocol architect", primaryMethod:"Protocol engineering", impactLayer:"Infrastructural", taxonomy:["Internet and web","Open source and infrastructure"], bio:"Radia Perlman created the Spanning Tree Protocol, allowing Ethernet networks to avoid bridge loops and scale reliably. Her protocol work made network infrastructure more robust and helped enterprise networking grow.", contributions:["Invented the Spanning Tree Protocol","Advanced network routing and bridging protocols","Authored influential networking textbooks","Inducted into the Internet Hall of Fame"], career:[{y:"1985",c:"DEC",n:"Developed the Spanning Tree Protocol"},{y:"1990s",c:"Networking",n:"Advanced routing and network security protocols"},{y:"2014",c:"Internet Hall of Fame",n:"Inducted as an internet pioneer"}], influenceNetwork:"MIT, DEC, Ethernet switching, routing standards, and enterprise network engineering.", criticalLens:"Infrastructure protocols are often invisible despite being critical; networking history has historically under-recognized women engineers.", sources:[{label:"Internet Hall of Fame biography",url:"https://www.internethalloffame.org/inductee/radia-perlman/"},{label:"National Inventors Hall of Fame profile",url:"https://www.invent.org/inductees/radia-perlman"}] }),
  referenceProfile({ id:"douglas-engelbart", name:"Douglas Engelbart", role:"visionary", roleLabel:"Inventor / HCI Pioneer", institution:"SRI International", country:"USA", rating:96, dob:"Jan 30, 1925", birth:"Portland, OR", edu:"Oregon State / UC Berkeley", domain:"HCI, Mouse, Hypertext", notable:"Computer mouse, NLS, interactive computing", era:"PC era", century:"20th century", decade:"1960s", livingStatus:"Deceased", innovationType:"HCI systems architect", primaryMethod:"Research prototypes and systems demos", impactLayer:"Infrastructural", taxonomy:["Design and human-computer interaction","Computing and software"], bio:"Douglas Engelbart built a vision of interactive computing that included the mouse, hypertext, collaborative editing, windows, and networked knowledge work. His 1968 demonstration became a defining preview of personal and collaborative computing.", contributions:["Invented the computer mouse with Bill English","Built the NLS interactive computing system","Presented the 1968 Mother of All Demos","Received the 1997 ACM A.M. Turing Award"], career:[{y:"1962",c:"Augmenting Intellect",n:"Published his framework for augmenting human intellect"},{y:"1968",c:"Demo",n:"Presented the Mother of All Demos"},{y:"1997",c:"Turing Award",n:"Received the ACM A.M. Turing Award"}], influenceNetwork:"SRI, ARPA-funded computing, Xerox PARC, Apple-style interfaces, and collaborative software.", criticalLens:"Many of Engelbart's ideas were commercialized elsewhere, raising questions about credit and research-to-market translation.", sources:[{label:"ACM Turing laureate page",url:"https://awards.acm.org/award_winners/engelbart_5078811"},{label:"Engelbart Institute archive",url:"https://dougengelbart.org/"}] }),
  referenceProfile({ id:"alan-kay", name:"Alan Kay", role:"visionary", roleLabel:"Computer Scientist / HCI Pioneer", institution:"Xerox PARC / Viewpoints Research", country:"USA", rating:95, dob:"May 17, 1940", birth:"Springfield, MA", edu:"University of Colorado / University of Utah", domain:"GUI, Object-Oriented Programming, Education", notable:"Dynabook, Smalltalk, object-oriented interfaces", era:"PC era", century:"20th-21st centuries", decade:"1970s", livingStatus:"Living", innovationType:"interface theorist", primaryMethod:"Research prototypes and learning systems", impactLayer:"Infrastructural", taxonomy:["Design and human-computer interaction","Computing and software"], bio:"Alan Kay advanced object-oriented programming, graphical personal computing, and the Dynabook vision at Xerox PARC. His work helped define laptops, tablets, educational computing, and modern interface metaphors.", contributions:["Conceived the Dynabook vision for portable personal computing","Helped develop Smalltalk and object-oriented programming practice","Shaped graphical user interface ideas at Xerox PARC","Received the 2003 ACM A.M. Turing Award"], career:[{y:"1970",c:"Xerox PARC",n:"Joined PARC and advanced personal computing research"},{y:"1972",c:"Smalltalk",n:"Helped create the Smalltalk environment"},{y:"2003",c:"Turing Award",n:"Received the ACM A.M. Turing Award"}], influenceNetwork:"ARPA research, Xerox PARC, Apple, educational computing, and object-oriented language design.", criticalLens:"Kay's child-centered computing vision remains only partly realized in commercial platforms dominated by consumption and surveillance economics.", sources:[{label:"ACM Turing laureate page",url:"https://awards.acm.org/award_winners/kay_3972189"},{label:"Viewpoints Research Institute",url:"http://www.vpri.org/"}] }),
  referenceProfile({ id:"jony-ive", name:"Jony Ive", role:"designer", roleLabel:"Industrial Designer", institution:"Apple / LoveFrom", country:"UK", rating:92, dob:"Feb 27, 1967", birth:"London, UK", edu:"Newcastle Polytechnic", domain:"Product Design, Consumer Electronics", notable:"iMac, iPod, iPhone, Apple design language", era:"PC and mobile era", century:"20th-21st centuries", decade:"1990s", livingStatus:"Living", innovationType:"designer", primaryMethod:"Industrial design and product language", impactLayer:"Consumer", taxonomy:["Consumer electronics","Design and human-computer interaction"], bio:"Jony Ive led Apple's industrial design through the iMac, iPod, iPhone, iPad, and Apple Watch eras. His work helped make consumer technology feel intimate, minimal, and desirable at global scale.", contributions:["Led industrial design for the iMac and iPod","Helped define the iPhone and iPad product language","Made materials, packaging, and hardware finish central to mass-market technology","Founded LoveFrom after leaving Apple"], career:[{y:"1992",c:"Apple",n:"Joined Apple's design group"},{y:"1998",c:"iMac",n:"Led design of the iMac G3"},{y:"2007",c:"iPhone",n:"Helped launch the iPhone hardware design language"},{y:"2019",c:"LoveFrom",n:"Left Apple and founded LoveFrom"}], influenceNetwork:"Apple, Steve Jobs, global manufacturing, design education, and premium consumer electronics.", criticalLens:"Apple design under Ive was praised for clarity but criticized for repair difficulty, sealed hardware, and form sometimes outranking ergonomics.", sources:[{label:"Apple Newsroom",url:"https://www.apple.com/newsroom/2019/06/jony-ive-to-form-independent-design-company-with-apple-as-client/"},{label:"Royal College of Art profile",url:"https://www.rca.ac.uk/more/staff/sir-jony-ive/"}] }),
  referenceProfile({ id:"katalin-kariko", name:"Katalin Kariko", role:"scientist", roleLabel:"Biochemist", institution:"University of Pennsylvania / BioNTech", country:"Hungary / USA", rating:96, dob:"Jan 17, 1955", birth:"Szolnok, Hungary", edu:"University of Szeged", domain:"mRNA Technology, Vaccines", notable:"Nucleoside-modified mRNA", era:"Biotech era", century:"20th-21st centuries", decade:"2000s", livingStatus:"Living", innovationType:"scientist", primaryMethod:"Biomedical research", impactLayer:"Societal", taxonomy:["Biotech and medicine"], bio:"Katalin Kariko's persistent work on nucleoside-modified mRNA helped make mRNA vaccines practical. Her research with Drew Weissman became foundational to COVID-19 vaccines and a broader therapeutic platform.", contributions:["Advanced nucleoside-modified mRNA research","Shared the 2023 Nobel Prize in Physiology or Medicine","Enabled practical mRNA vaccine platforms","Worked at BioNTech during mRNA vaccine translation"], career:[{y:"2005",c:"mRNA Paper",n:"Published key modified-mRNA work with Drew Weissman"},{y:"2013",c:"BioNTech",n:"Joined BioNTech as a senior leader"},{y:"2023",c:"Nobel Prize",n:"Shared the Nobel Prize in Physiology or Medicine"}], influenceNetwork:"University of Pennsylvania, BioNTech, Pfizer, immunology, and pandemic vaccine deployment.", criticalLens:"mRNA success raised debates over public funding, patent rights, vaccine access, and global health equity.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/medicine/2023/kariko/facts/"},{label:"Penn Medicine Nobel note",url:"https://www.pennmedicine.org/news/news-releases/2023/october/katalin-kariko-and-drew-weissman-win-2023-nobel-prize"}] }),
  referenceProfile({ id:"jennifer-doudna", name:"Jennifer Doudna", role:"scientist", roleLabel:"Biochemist", institution:"UC Berkeley / Innovative Genomics Institute", country:"USA", rating:96, dob:"Feb 19, 1964", birth:"Washington, DC", edu:"Pomona College / Harvard", domain:"CRISPR, Genome Editing", notable:"CRISPR-Cas9 genome editing", era:"Biotech era", century:"21st century", decade:"2010s", livingStatus:"Living", innovationType:"scientist", primaryMethod:"Biomedical research and institution building", impactLayer:"Scientific", taxonomy:["Biotech and medicine"], bio:"Jennifer Doudna co-developed CRISPR-Cas9 as a programmable genome-editing technology with Emmanuelle Charpentier. The work transformed molecular biology, medicine, agriculture, and bioethics.", contributions:["Co-developed CRISPR-Cas9 genome editing","Shared the 2020 Nobel Prize in Chemistry","Co-founded the Innovative Genomics Institute","Helped move CRISPR into medicine and agriculture"], career:[{y:"2012",c:"CRISPR",n:"Published landmark CRISPR-Cas9 work with Charpentier"},{y:"2014",c:"IGI",n:"Helped launch the Innovative Genomics Institute"},{y:"2020",c:"Nobel Prize",n:"Shared the Nobel Prize in Chemistry"}], influenceNetwork:"UC Berkeley, RNA biology, CRISPR research, biotech startups, and gene-editing regulation.", criticalLens:"CRISPR raises unresolved questions about germline editing, access, patent disputes, ecological impact, and consent.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/chemistry/2020/doudna/facts/"},{label:"IGI profile",url:"https://innovativegenomics.org/people/jennifer-doudna/"}] }),
  referenceProfile({ id:"emmanuelle-charpentier", name:"Emmanuelle Charpentier", role:"scientist", roleLabel:"Microbiologist", institution:"Max Planck Unit for the Science of Pathogens", country:"France", rating:96, dob:"Dec 11, 1968", birth:"Juvisy-sur-Orge, France", edu:"Sorbonne University / Pasteur Institute", domain:"CRISPR, Genome Editing", notable:"CRISPR-Cas9 genome editing", era:"Biotech era", century:"21st century", decade:"2010s", livingStatus:"Living", innovationType:"scientist", primaryMethod:"Microbiology research", impactLayer:"Scientific", taxonomy:["Biotech and medicine"], bio:"Emmanuelle Charpentier's microbiology research on bacterial immune systems led to the CRISPR-Cas9 genome-editing breakthrough with Jennifer Doudna. Her work turned a bacterial defense mechanism into a programmable scientific tool.", contributions:["Co-developed CRISPR-Cas9 genome editing","Shared the 2020 Nobel Prize in Chemistry","Advanced understanding of bacterial CRISPR systems","Founded a Max Planck research unit focused on pathogens"], career:[{y:"2011",c:"CRISPR Collaboration",n:"Met Jennifer Doudna and began CRISPR-Cas9 collaboration"},{y:"2012",c:"Science Paper",n:"Published programmable CRISPR-Cas9 work"},{y:"2020",c:"Nobel Prize",n:"Shared the Nobel Prize in Chemistry"}], influenceNetwork:"European microbiology, UC Berkeley RNA biology, Max Planck research, and global biotech.", criticalLens:"CRISPR intensifies ethical concerns around embryo editing, patents, biosafety, and unequal medical access.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/chemistry/2020/charpentier/facts/"},{label:"Max Planck profile",url:"https://www.mpg.de/12309674/science-of-pathogens-charpentier"}] }),
  referenceProfile({ id:"jonas-salk", name:"Jonas Salk", role:"scientist", roleLabel:"Medical Researcher", institution:"University of Pittsburgh / Salk Institute", country:"USA", rating:96, dob:"Oct 28, 1914", birth:"New York, NY", edu:"City College of New York / NYU", domain:"Vaccines, Public Health", notable:"Polio vaccine", era:"Postwar medicine", century:"20th century", decade:"1950s", livingStatus:"Deceased", innovationType:"medical innovator", primaryMethod:"Clinical research and public health translation", impactLayer:"Societal", taxonomy:["Biotech and medicine"], bio:"Jonas Salk developed the first widely used polio vaccine, helping turn a feared childhood disease into a preventable public-health problem. His work became a landmark of vaccine science and mass immunization.", contributions:["Developed the inactivated polio vaccine","Led one of the largest vaccine field trials in history","Helped launch mass immunization against polio","Founded the Salk Institute for Biological Studies"], career:[{y:"1954",c:"Field Trial",n:"Polio vaccine field trials began at national scale"},{y:"1955",c:"Vaccine",n:"Polio vaccine was announced effective"},{y:"1963",c:"Salk Institute",n:"Founded the Salk Institute"}], influenceNetwork:"University medicine, public health agencies, philanthropy, schools, and vaccine manufacturing.", criticalLens:"Polio vaccine history includes debates over credit, vaccine safety oversight, public trust, and global eradication logistics.", sources:[{label:"Salk Institute biography",url:"https://www.salk.edu/about/history-of-salk/jonas-salk/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Jonas-Salk"}] })
];

const FOUNDATIONAL_INNOVATORS = [
  referenceProfile({ id:"john-von-neumann", name:"John von Neumann", role:"scientist", roleLabel:"Mathematician / Computer Architect", institution:"Institute for Advanced Study", country:"Hungary / USA", rating:98, tier:"legend", dob:"Dec 28, 1903", birth:"Budapest, Hungary", edu:"Pazmany Peter University / ETH Zurich", domain:"Computing, Architecture, Game Theory", notable:"Stored-program architecture, EDVAC, game theory", era:"Postwar computing", century:"20th century", decade:"1940s", livingStatus:"Deceased", innovationType:"systems architect", primaryMethod:"Mathematical research and systems architecture", impactLayer:"Infrastructural", taxonomy:["Computing and software","Open source and infrastructure"], bio:"John von Neumann helped formalize stored-program computer architecture and made major contributions across mathematics, physics, game theory, and scientific computing. His work became a template for general-purpose computers and modern digital systems.", contributions:["Defined a practical model for stored-program computer architecture","Shaped early electronic computing through the EDVAC and IAS computer traditions","Co-founded modern game theory with Oskar Morgenstern","Influenced numerical methods, simulation, and scientific computing"], career:[{y:"1944",c:"Game Theory",n:"Published Theory of Games and Economic Behavior with Oskar Morgenstern"},{y:"1945",c:"EDVAC",n:"Drafted the influential First Draft of a Report on the EDVAC"},{y:"1951",c:"IAS Computer",n:"Helped direct the IAS stored-program computer project"}], influenceNetwork:"Princeton, IAS, Los Alamos, early computer laboratories, and postwar scientific institutions.", criticalLens:"His computing legacy is linked to military research, nuclear strategy, and state-sponsored scientific infrastructure.", sources:[{label:"Computer History Museum timeline",url:"https://www.computerhistory.org/timeline/1945/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/John-von-Neumann"}] }),
  referenceProfile({ id:"claude-shannon", name:"Claude Shannon", role:"scientist", roleLabel:"Mathematician / Electrical Engineer", institution:"Bell Labs / MIT", country:"USA", rating:98, tier:"legend", dob:"Apr 30, 1916", birth:"Petoskey, MI", edu:"University of Michigan / MIT", domain:"Information Theory, Digital Communication", notable:"Information theory, bit, digital circuits", era:"Postwar computing", century:"20th century", decade:"1940s", livingStatus:"Deceased", innovationType:"theorist", primaryMethod:"Mathematical research", impactLayer:"Scientific", taxonomy:["Computing and software","Internet and web","Media, communication, and platforms"], bio:"Claude Shannon founded information theory and showed how information could be quantified, encoded, transmitted, and protected from noise. His ideas underpin digital communication, compression, cryptography, computing, and the internet.", contributions:["Founded modern information theory in 1948","Connected Boolean algebra to relay and switching circuits","Formalized channel capacity, entropy, and noise-resistant communication","Influenced compression, coding theory, cryptography, and digital media"], career:[{y:"1937",c:"MIT",n:"Completed a landmark thesis applying Boolean algebra to switching circuits"},{y:"1948",c:"Information Theory",n:"Published A Mathematical Theory of Communication"},{y:"1956",c:"MIT",n:"Joined MIT as a faculty member"}], influenceNetwork:"Bell Labs, MIT, wartime cryptography, telecommunications, and later digital media research.", criticalLens:"Information theory is enabling infrastructure whose downstream uses include surveillance, military communications, and data extraction.", sources:[{label:"Nokia Bell Labs biography",url:"https://www.bell-labs.com/about/history-bell-labs/claude-shannon/"},{label:"MIT Museum profile",url:"https://mitmuseum.mit.edu/collections/person/claude-elwood-shannon-1916-2001"}] }),
  referenceProfile({ id:"grace-hopper", name:"Grace Hopper", role:"engineer", roleLabel:"Computer Scientist / Rear Admiral", institution:"U.S. Navy / Harvard", country:"USA", rating:96, dob:"Dec 9, 1906", birth:"New York, NY", edu:"Vassar / Yale", domain:"Compilers, COBOL, Software Engineering", notable:"Compiler work, COBOL, Mark I programming", era:"Postwar computing", century:"20th century", decade:"1950s", livingStatus:"Deceased", innovationType:"software pioneer", primaryMethod:"Engineering and standardization", impactLayer:"Infrastructural", taxonomy:["Computing and software","Open source and infrastructure"], bio:"Grace Hopper was a pioneering computer programmer who worked on the Harvard Mark I, advanced compiler ideas, and helped shape COBOL. Her work made programming more accessible and helped transform software into a durable professional discipline.", contributions:["Programmed the Harvard Mark I computer","Advanced early compiler technology and automatic programming","Helped develop COBOL for business computing","Popularized practical software engineering ideas and education"], career:[{y:"1944",c:"Harvard Mark I",n:"Joined the Mark I programming staff"},{y:"1952",c:"A-0",n:"Worked on one of the first compiler systems"},{y:"1959",c:"COBOL",n:"Contributed to the process that produced COBOL"},{y:"1986",c:"U.S. Navy",n:"Retired as a rear admiral"}], influenceNetwork:"Military computing, business data processing, universities, and software standardization bodies.", criticalLens:"COBOL enabled durable institutional systems, including legacy infrastructures that later became difficult to modernize.", sources:[{label:"Computer History Museum profile",url:"https://computerhistory.org/profile/grace-hopper/"},{label:"U.S. Navy biography",url:"https://www.history.navy.mil/browse-by-topic/people/trailblazers/grace-hopper.html"}] }),
  referenceProfile({ id:"donald-knuth", name:"Donald Knuth", role:"scientist", roleLabel:"Computer Scientist / Author", institution:"Stanford University", country:"USA", rating:96, dob:"Jan 10, 1938", birth:"Milwaukee, WI", edu:"Case Institute of Technology / Caltech", domain:"Algorithms, Programming, Typesetting", notable:"The Art of Computer Programming, TeX", era:"Postwar computing", century:"20th-21st centuries", decade:"1960s", livingStatus:"Living", innovationType:"theorist", primaryMethod:"Research, authorship, and software creation", impactLayer:"Scientific", taxonomy:["Computing and software","Open source and infrastructure"], bio:"Donald Knuth made algorithm analysis a rigorous craft through The Art of Computer Programming and created TeX to bring precision to digital typesetting. His work shaped how programmers reason about correctness, complexity, and literate programming.", contributions:["Authored The Art of Computer Programming","Created TeX and METAFONT for high-quality typesetting","Advanced algorithm analysis and literate programming","Received the 1974 ACM A.M. Turing Award"], career:[{y:"1968",c:"TAOCP",n:"Published the first volume of The Art of Computer Programming"},{y:"1974",c:"Turing Award",n:"Received the ACM A.M. Turing Award"},{y:"1978",c:"TeX",n:"Released the first version of TeX"}], influenceNetwork:"Stanford, mathematical computer science, publishing, and technical documentation culture.", criticalLens:"Knuth's standards are foundational but demanding, exposing the gap between rigorous computing theory and everyday software practice.", sources:[{label:"ACM Turing laureate page",url:"https://amturing.acm.org/award_recipient/knuth_1013846.cfm"},{label:"Stanford profile",url:"https://profiles.stanford.edu/donald-knuth"}] }),
  referenceProfile({ id:"william-shockley", name:"William Shockley", role:"scientist", roleLabel:"Physicist", institution:"Bell Labs / Shockley Semiconductor", country:"USA", rating:90, dob:"Feb 13, 1910", birth:"London, UK", edu:"Caltech / MIT", domain:"Semiconductors, Transistor", notable:"Transistor effect, Shockley Semiconductor", era:"Postwar electronics", century:"20th century", decade:"1940s", livingStatus:"Deceased", innovationType:"scientist-founder", primaryMethod:"Research and industrial lab building", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware"], bio:"William Shockley shared the 1956 Nobel Prize in Physics for transistor research at Bell Labs and later founded Shockley Semiconductor, an important but troubled root of Silicon Valley's semiconductor industry.", contributions:["Shared the Nobel Prize for transistor-effect research","Helped establish solid-state electronics as a commercial field","Founded Shockley Semiconductor Laboratory","Indirectly seeded Fairchild Semiconductor through departing employees"], career:[{y:"1947",c:"Transistor Era",n:"Led Bell Labs solid-state work around the transistor breakthrough"},{y:"1956",c:"Nobel Prize",n:"Shared the Nobel Prize in Physics with Bardeen and Brattain"},{y:"1956",c:"Shockley Semiconductor",n:"Founded a semiconductor laboratory in California"}], influenceNetwork:"Bell Labs, Stanford-area electronics, Fairchild Semiconductor, and early Silicon Valley.", criticalLens:"His later advocacy of eugenics and his management failures are central criticisms and must be separated from the transistor's technical importance.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/1956/shockley/facts/"},{label:"Computer History Museum Silicon Engine",url:"https://www.computerhistory.org/siliconengine/"}] }),
  referenceProfile({ id:"john-bardeen", name:"John Bardeen", role:"scientist", roleLabel:"Physicist", institution:"Bell Labs / University of Illinois", country:"USA", rating:97, tier:"legend", dob:"May 23, 1908", birth:"Madison, WI", edu:"University of Wisconsin / Princeton", domain:"Transistor, Superconductivity", notable:"Transistor, BCS theory", era:"Postwar electronics", century:"20th century", decade:"1940s", livingStatus:"Deceased", innovationType:"scientist", primaryMethod:"Fundamental physics research", impactLayer:"Scientific", taxonomy:["Semiconductors and hardware"], bio:"John Bardeen co-invented the transistor and later co-developed BCS theory of superconductivity, becoming the only person to receive two Nobel Prizes in Physics. His work anchors both modern electronics and condensed-matter physics.", contributions:["Co-invented the point-contact transistor at Bell Labs","Shared the 1956 Nobel Prize in Physics","Co-developed BCS theory of superconductivity","Shared the 1972 Nobel Prize in Physics"], career:[{y:"1947",c:"Transistor",n:"Co-invented the point-contact transistor with Brattain"},{y:"1951",c:"Illinois",n:"Joined the University of Illinois faculty"},{y:"1972",c:"Nobel Prize",n:"Received a second Physics Nobel for superconductivity theory"}], influenceNetwork:"Bell Labs, University of Illinois, semiconductor electronics, and condensed-matter physics.", criticalLens:"The transistor's global impact includes electronic waste, surveillance hardware, military systems, and supply-chain concentration.", sources:[{label:"Nobel Prize 1956 facts",url:"https://www.nobelprize.org/prizes/physics/1956/bardeen/facts/"},{label:"Nobel Prize 1972 facts",url:"https://www.nobelprize.org/prizes/physics/1972/bardeen/facts/"}] }),
  referenceProfile({ id:"walter-brattain", name:"Walter Brattain", role:"scientist", roleLabel:"Physicist", institution:"Bell Labs", country:"USA", rating:94, dob:"Feb 10, 1902", birth:"Amoy, China", edu:"Whitman College / University of Minnesota", domain:"Transistor, Solid-State Physics", notable:"Point-contact transistor", era:"Postwar electronics", century:"20th century", decade:"1940s", livingStatus:"Deceased", innovationType:"experimental physicist", primaryMethod:"Laboratory experimentation", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware"], bio:"Walter Brattain was the experimental physicist whose Bell Labs work with John Bardeen produced the point-contact transistor. The device launched the transistor era and made miniaturized electronics possible.", contributions:["Co-invented the first point-contact transistor","Shared the 1956 Nobel Prize in Physics","Advanced surface-state understanding in semiconductors","Helped move electronics beyond vacuum tubes"], career:[{y:"1947",c:"Transistor",n:"Demonstrated the point-contact transistor with Bardeen"},{y:"1956",c:"Nobel Prize",n:"Shared the Nobel Prize in Physics"},{y:"1967",c:"Whitman College",n:"Retired from Bell Labs and later taught at Whitman"}], influenceNetwork:"Bell Labs' solid-state physics group and industrial electronics research.", criticalLens:"The transistor breakthrough emerged from large corporate labs and military-industrial demand, not isolated invention alone.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/1956/brattain/facts/"},{label:"Computer History Museum Silicon Engine",url:"https://www.computerhistory.org/siliconengine/"}] }),
  referenceProfile({ id:"jack-kilby", name:"Jack Kilby", role:"engineer", roleLabel:"Electrical Engineer", institution:"Texas Instruments", country:"USA", rating:96, dob:"Nov 8, 1923", birth:"Jefferson City, MO", edu:"University of Illinois / University of Wisconsin", domain:"Integrated Circuits, Microelectronics", notable:"Integrated circuit", era:"Space-age electronics", century:"20th century", decade:"1950s", livingStatus:"Deceased", innovationType:"inventor", primaryMethod:"Engineering invention", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware"], bio:"Jack Kilby built one of the first working integrated circuits at Texas Instruments, helping launch microelectronics. Integrated circuits made compact computers, calculators, spacecraft electronics, and modern consumer devices possible.", contributions:["Built a working integrated circuit at Texas Instruments","Shared the technical foundation of microelectronics","Received the 2000 Nobel Prize in Physics","Contributed to handheld calculator development"], career:[{y:"1958",c:"Texas Instruments",n:"Demonstrated a working integrated circuit"},{y:"1967",c:"Calculator",n:"Worked on early handheld calculator technology"},{y:"2000",c:"Nobel Prize",n:"Received the Nobel Prize in Physics"}], influenceNetwork:"Texas Instruments, defense electronics, calculators, and the global semiconductor industry.", criticalLens:"The integrated circuit intensified dependence on specialized manufacturing, mineral supply chains, and high-capital fabs.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/physics/2000/kilby/facts/"},{label:"Texas Instruments biography",url:"https://www.ti.com/about-ti/company/ti-at-a-glance/jack-kilby.html"}] }),
  referenceProfile({ id:"robert-noyce", name:"Robert Noyce", role:"engineer", roleLabel:"Engineer / Entrepreneur", institution:"Fairchild Semiconductor / Intel", country:"USA", rating:96, dob:"Dec 12, 1927", birth:"Burlington, IA", edu:"Grinnell College / MIT", domain:"Integrated Circuits, Intel", notable:"Planar integrated circuit, Intel", era:"Space-age electronics", century:"20th century", decade:"1950s", livingStatus:"Deceased", innovationType:"industrializer", primaryMethod:"Productization and company building", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware","Consumer electronics"], bio:"Robert Noyce co-founded Fairchild Semiconductor and Intel and independently developed a monolithic integrated circuit using planar semiconductor processes. His leadership helped turn microelectronics into Silicon Valley's central industrial engine.", contributions:["Co-invented the monolithic integrated circuit","Co-founded Fairchild Semiconductor","Co-founded Intel with Gordon Moore","Helped define Silicon Valley's startup and semiconductor culture"], career:[{y:"1957",c:"Fairchild",n:"Co-founded Fairchild Semiconductor"},{y:"1959",c:"Integrated Circuit",n:"Filed integrated-circuit patent work"},{y:"1968",c:"Intel",n:"Co-founded Intel"}], influenceNetwork:"Shockley Semiconductor, Fairchild, Intel, venture capital, and Silicon Valley manufacturing.", criticalLens:"The Silicon Valley model produced innovation while concentrating economic power around platform hardware.", sources:[{label:"Computer History Museum profile",url:"https://computerhistory.org/profile/robert-noyce/"},{label:"Intel biography",url:"https://www.intel.com/content/www/us/en/history/museum-robert-noyce.html"}] }),
  referenceProfile({ id:"gordon-moore", name:"Gordon Moore", role:"scientist", roleLabel:"Engineer / Executive", institution:"Fairchild Semiconductor / Intel", country:"USA", rating:95, dob:"Jan 3, 1929", birth:"San Francisco, CA", edu:"UC Berkeley / Caltech", domain:"Semiconductors, Moore's Law", notable:"Moore's Law, Intel", era:"Space-age electronics", century:"20th-21st centuries", decade:"1960s", livingStatus:"Deceased", innovationType:"industrial scientist", primaryMethod:"Research, forecasting, and industrial strategy", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware"], bio:"Gordon Moore co-founded Intel and articulated the scaling observation later called Moore's Law. That expectation became a roadmap for semiconductor manufacturing, computing economics, and digital device progress for decades.", contributions:["Co-founded Intel","Formulated the observation known as Moore's Law","Helped industrialize semiconductor scaling","Guided Intel through the microprocessor era"], career:[{y:"1957",c:"Fairchild",n:"Co-founded Fairchild Semiconductor"},{y:"1965",c:"Moore's Law",n:"Published the scaling observation in Electronics magazine"},{y:"1968",c:"Intel",n:"Co-founded Intel"}], influenceNetwork:"Fairchild, Intel, semiconductor roadmapping, personal computing, and global chip manufacturing.", criticalLens:"Moore's Law became both an observation and an industry pressure system encouraging speed, capital intensity, and planned obsolescence.", sources:[{label:"Intel biography",url:"https://www.intel.com/content/www/us/en/history/museum-gordon-moore.html"},{label:"Computer History Museum profile",url:"https://computerhistory.org/profile/gordon-moore/"}] }),
  referenceProfile({ id:"andy-grove", name:"Andy Grove", role:"visionary", roleLabel:"Engineer / CEO", institution:"Intel", country:"Hungary / USA", rating:94, dob:"Sep 2, 1936", birth:"Budapest, Hungary", edu:"City College of New York / UC Berkeley", domain:"Semiconductors, Operations", notable:"Intel execution culture, microprocessor strategy", era:"PC era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Deceased", innovationType:"industrializer", primaryMethod:"Commercialization and management systems", impactLayer:"Infrastructural", taxonomy:["Semiconductors and hardware","Consumer electronics"], bio:"Andy Grove was Intel's operational force, helping move the company from memory chips toward microprocessors and building one of the most influential management cultures in technology. His leadership shaped the PC era's semiconductor supply base.", contributions:["Helped build Intel from its founding years","Led the strategic shift from memory to microprocessors","Created influential management discipline at Intel","Authored Only the Paranoid Survive"], career:[{y:"1968",c:"Intel",n:"Joined Intel at founding as an early executive"},{y:"1987",c:"Intel",n:"Became CEO"},{y:"1997",c:"Time",n:"Named Time's Person of the Year"}], influenceNetwork:"Intel, PC manufacturers, Microsoft-era computing, and management practice in Silicon Valley.", criticalLens:"Intel's dominance enabled standardization but raised questions about monopoly behavior, labor intensity, and strategic dependence.", sources:[{label:"Intel biography",url:"https://www.intel.com/content/www/us/en/history/museum-andy-grove.html"},{label:"Computer History Museum profile",url:"https://computerhistory.org/profile/andrew-s-grove/"}] }),
  referenceProfile({ id:"tu-youyou", name:"Tu Youyou", role:"scientist", roleLabel:"Pharmaceutical Chemist", institution:"China Academy of Chinese Medical Sciences", country:"China", rating:95, dob:"Dec 30, 1930", birth:"Ningbo, China", edu:"Peking University Medical School", domain:"Medicine, Artemisinin, Malaria", notable:"Artemisinin antimalarial therapy", era:"Postwar medicine", century:"20th-21st centuries", decade:"1970s", livingStatus:"Living", innovationType:"medical scientist", primaryMethod:"Pharmacological research", impactLayer:"Societal", taxonomy:["Biotech and medicine"], bio:"Tu Youyou discovered artemisinin, a malaria treatment derived from sweet wormwood research that became a cornerstone of modern antimalarial therapy. Her work saved millions of lives and won the 2015 Nobel Prize in Physiology or Medicine.", contributions:["Discovered artemisinin for malaria treatment","Shared the 2015 Nobel Prize in Physiology or Medicine","Bridged traditional medical texts and modern pharmacology","Enabled artemisinin-based combination therapies"], career:[{y:"1969",c:"Project 523",n:"Joined China's malaria drug discovery program"},{y:"1972",c:"Artemisinin",n:"Identified artemisinin's antimalarial activity"},{y:"2015",c:"Nobel Prize",n:"Shared the Nobel Prize in Physiology or Medicine"}], influenceNetwork:"Chinese medical research, malaria control, global public health, and pharmacology.", criticalLens:"Her story raises questions about individual credit within state research programs and equitable access to life-saving medicines.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/medicine/2015/tu/facts/"},{label:"Nobel Prize interview",url:"https://www.nobelprize.org/prizes/medicine/2015/tu/interview/"}] }),
  referenceProfile({ id:"wernher-von-braun", name:"Wernher von Braun", role:"engineer", roleLabel:"Aerospace Engineer", institution:"NASA / U.S. Army", country:"Germany / USA", rating:91, dob:"Mar 23, 1912", birth:"Wirsitz, Germany", edu:"Technical University of Berlin", domain:"Rocketry, Spaceflight", notable:"V-2, Saturn V", era:"Space age", century:"20th century", decade:"1960s", livingStatus:"Deceased", innovationType:"aerospace architect", primaryMethod:"Engineering and program leadership", impactLayer:"Infrastructural", taxonomy:["Space and aerospace"], bio:"Wernher von Braun led major rocket engineering programs, from Germany's V-2 weapon to NASA's Saturn V launch vehicle. His technical leadership was central to the Apollo Moon landings, while his Nazi-era work remains a serious ethical stain.", contributions:["Directed development of the V-2 rocket in wartime Germany","Led U.S. Army ballistic missile work after World War II","Served as chief architect of NASA's Saturn V program","Popularized human spaceflight through public communication"], career:[{y:"1945",c:"United States",n:"Transferred to the U.S. under Operation Paperclip"},{y:"1960",c:"NASA",n:"Became director of Marshall Space Flight Center"},{y:"1969",c:"Apollo",n:"Saturn V launched Apollo 11 to the Moon"}], influenceNetwork:"German rocketry, U.S. military missile programs, NASA, and Cold War space competition.", criticalLens:"His achievements must be read alongside Nazi party affiliation, forced labor connected to V-2 production, and aerospace militarization.", sources:[{label:"NASA biography",url:"https://www.nasa.gov/people/wernher-von-braun/"},{label:"Britannica biography",url:"https://www.britannica.com/biography/Wernher-von-Braun"}] }),
  referenceProfile({ id:"burt-rutan", name:"Burt Rutan", role:"engineer", roleLabel:"Aerospace Designer", institution:"Scaled Composites", country:"USA", rating:89, dob:"Jun 17, 1943", birth:"Estacada, OR", edu:"California Polytechnic State University", domain:"Aerospace, Experimental Aircraft", notable:"Voyager, SpaceShipOne", era:"Private aerospace era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"designer-engineer", primaryMethod:"Experimental design and prototyping", impactLayer:"Infrastructural", taxonomy:["Space and aerospace","Design and human-computer interaction"], bio:"Burt Rutan designed unconventional aircraft and helped open the private spaceflight era with SpaceShipOne. His lightweight composite designs made aerospace experimentation more agile and visually distinctive.", contributions:["Designed Voyager for nonstop unrefueled flight around the world","Founded Scaled Composites","Designed SpaceShipOne, winner of the Ansari X Prize","Advanced composite aircraft experimentation"], career:[{y:"1982",c:"Scaled Composites",n:"Founded Scaled Composites"},{y:"1986",c:"Voyager",n:"Voyager completed nonstop unrefueled flight around the world"},{y:"2004",c:"SpaceShipOne",n:"Won the Ansari X Prize"}], influenceNetwork:"Experimental aviation, composites, private spaceflight, Virgin Galactic, and X Prize culture.", criticalLens:"Private spaceflight broadened experimentation but raised safety, commercialization, and access questions.", sources:[{label:"National Aviation Hall of Fame profile",url:"https://nationalaviation.org/enshrinee/elbert-leander-burt-rutan/"},{label:"Scaled Composites history",url:"https://www.scaled.com/who-we-are/history/"}] }),
  referenceProfile({ id:"dieter-rams", name:"Dieter Rams", role:"designer", roleLabel:"Industrial Designer", institution:"Braun / Vitsoe", country:"Germany", rating:93, dob:"May 20, 1932", birth:"Wiesbaden, Germany", edu:"Wiesbaden School of Art", domain:"Industrial Design, Product Systems", notable:"Ten principles of good design, Braun design language", era:"Postwar design", century:"20th-21st centuries", decade:"1960s", livingStatus:"Living", innovationType:"design theorist", primaryMethod:"Industrial design systems", impactLayer:"Consumer", taxonomy:["Design and human-computer interaction","Consumer electronics"], bio:"Dieter Rams shaped modern industrial design through his work at Braun and Vitsoe and through his ten principles of good design. His restrained, functional approach deeply influenced consumer electronics, interface aesthetics, and product design education.", contributions:["Defined the Ten Principles for Good Design","Led Braun's influential postwar product design language","Designed lasting Vitsoe shelving systems","Influenced minimalist consumer technology"], career:[{y:"1955",c:"Braun",n:"Joined Braun as an architect and designer"},{y:"1961",c:"Braun",n:"Became chief design officer"},{y:"1995",c:"Braun",n:"Retired after decades shaping product design"}], influenceNetwork:"Braun, Ulm design principles, Vitsoe, Apple design culture, and design education.", criticalLens:"Rams' anti-waste principles are often cited by industries that still depend on rapid replacement cycles and sealed products.", sources:[{label:"Vitsoe biography",url:"https://www.vitsoe.com/us/about/dieter-rams"},{label:"Design Museum profile",url:"https://designmuseum.org/designers/dieter-rams"}] }),
  referenceProfile({ id:"james-dyson", name:"James Dyson", role:"designer", roleLabel:"Inventor / Industrial Designer", institution:"Dyson", country:"UK", rating:88, dob:"May 2, 1947", birth:"Cromer, UK", edu:"Byam Shaw School of Art / Royal College of Art", domain:"Industrial Design, Consumer Appliances", notable:"Cyclonic vacuum cleaner, Dyson engineering culture", era:"Late 20th century product design", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"inventor-founder", primaryMethod:"Product invention and commercialization", impactLayer:"Consumer", taxonomy:["Consumer electronics","Design and human-computer interaction"], bio:"James Dyson turned cyclonic separation into a mass-market vacuum-cleaner platform and built Dyson into a design-led engineering company. His work represents invention through iteration, prototyping, and premium product positioning.", contributions:["Invented the bagless cyclonic vacuum cleaner","Founded Dyson as a global engineering company","Popularized transparent product engineering as brand identity","Expanded into fans, hand dryers, hair care, and robotics"], career:[{y:"1979",c:"Prototype",n:"Began developing bagless cyclonic vacuum prototypes"},{y:"1993",c:"Dyson",n:"Launched the DC01 vacuum cleaner in the UK"},{y:"2002",c:"Foundation",n:"Created the James Dyson Foundation"}], influenceNetwork:"Royal College of Art, UK engineering, manufacturing strategy, and premium consumer appliances.", criticalLens:"Dyson's success also invites scrutiny of offshore manufacturing decisions, premium pricing, and repairability.", sources:[{label:"Dyson company history",url:"https://www.dyson.com/discover/inside-dyson/history"},{label:"James Dyson Foundation",url:"https://www.jamesdysonfoundation.com/"}] }),
  referenceProfile({ id:"edward-tufte", name:"Edward Tufte", role:"visionary", roleLabel:"Statistician / Information Designer", institution:"Yale University", country:"USA", rating:91, dob:"Mar 14, 1942", birth:"Kansas City, MO", edu:"Stanford University", domain:"Information Design, Data Visualization", notable:"The Visual Display of Quantitative Information", era:"Information design era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"information designer", primaryMethod:"Research, critique, and design education", impactLayer:"Scientific", taxonomy:["Design and human-computer interaction","Media, communication, and platforms"], bio:"Edward Tufte transformed data visualization practice by arguing for high-resolution evidence, graphical integrity, and dense but readable displays. His books shaped journalism, statistics, interface dashboards, and scientific communication.", contributions:["Authored The Visual Display of Quantitative Information","Popularized concepts such as chartjunk and data-ink ratio","Elevated Minard's Napoleon map as a visualization classic","Influenced dashboards, research graphics, and analytical communication"], career:[{y:"1982",c:"Visual Display",n:"Self-published The Visual Display of Quantitative Information"},{y:"1983",c:"Yale",n:"Joined Yale University"},{y:"2010",c:"Advisory Panel",n:"Served on a U.S. Recovery Act transparency advisory panel"}], influenceNetwork:"Statistics, political science, design, journalism, scientific graphics, and interface practice.", criticalLens:"Tufte's minimalist standards are influential but sometimes criticized as underemphasizing accessibility and interactive contexts.", sources:[{label:"Edward Tufte official site",url:"https://www.edwardtufte.com/tufte/"},{label:"Yale profile archive",url:"https://statistics.yale.edu/people/edward-tufte"}] }),
  referenceProfile({ id:"fei-fei-li", name:"Fei-Fei Li", role:"scientist", roleLabel:"Computer Scientist", institution:"Stanford University", country:"China / USA", rating:93, dob:"Jul 3, 1976", birth:"Beijing, China", edu:"Princeton / Caltech", domain:"AI, Computer Vision", notable:"ImageNet, human-centered AI", era:"AI era", century:"21st century", decade:"2000s", livingStatus:"Living", innovationType:"AI researcher", primaryMethod:"Dataset creation, research, and institution building", impactLayer:"Scientific", taxonomy:["AI and machine learning"], bio:"Fei-Fei Li created and led ImageNet, the dataset and challenge that helped accelerate modern deep learning in computer vision. She later became a leading advocate for human-centered AI through Stanford HAI.", contributions:["Created ImageNet and the ImageNet Challenge","Advanced large-scale visual recognition research","Co-founded Stanford Human-Centered AI Institute","Advocated for human-centered and inclusive AI"], career:[{y:"2009",c:"ImageNet",n:"Launched ImageNet as a large-scale visual dataset"},{y:"2017",c:"Google Cloud",n:"Served as Chief Scientist of AI/ML at Google Cloud"},{y:"2019",c:"Stanford HAI",n:"Co-founded Stanford's Human-Centered AI Institute"}], influenceNetwork:"Princeton, Stanford, ImageNet researchers, deep learning labs, Google Cloud, and AI policy.", criticalLens:"ImageNet helped accelerate AI but raised questions about dataset labeling, consent, bias, and benchmark-driven research.", sources:[{label:"Stanford profile",url:"https://profiles.stanford.edu/fei-fei-li"},{label:"Stanford HAI profile",url:"https://hai.stanford.edu/people/fei-fei-li"}] }),
  referenceProfile({ id:"rodney-brooks", name:"Rodney Brooks", role:"scientist", roleLabel:"Roboticist / Entrepreneur", institution:"MIT / iRobot / Rethink Robotics", country:"Australia / USA", rating:90, dob:"Dec 30, 1954", birth:"Adelaide, Australia", edu:"Flinders University / Stanford", domain:"Robotics, Embodied AI", notable:"Subsumption architecture, iRobot, Roomba", era:"AI and robotics era", century:"20th-21st centuries", decade:"1980s", livingStatus:"Living", innovationType:"robotics architect", primaryMethod:"Embodied AI research and commercialization", impactLayer:"Consumer", taxonomy:["AI and machine learning","Consumer electronics"], bio:"Rodney Brooks challenged symbolic AI by building behavior-based robots that acted in the world. He co-founded iRobot, helping move robotics from labs into homes through products such as Roomba.", contributions:["Developed subsumption architecture for behavior-based robotics","Directed MIT's Computer Science and Artificial Intelligence Laboratory","Co-founded iRobot","Helped commercialize household robotics through Roomba"], career:[{y:"1984",c:"MIT",n:"Joined MIT as a robotics researcher"},{y:"1986",c:"Subsumption",n:"Published influential behavior-based robotics work"},{y:"1990",c:"iRobot",n:"Co-founded iRobot"},{y:"2002",c:"Roomba",n:"iRobot launched Roomba"}], influenceNetwork:"MIT AI Lab, robotics startups, military robotics, consumer appliances, and embodied AI research.", criticalLens:"Robotics commercialization spans domestic convenience, labor displacement, military applications, privacy, and product reliability.", sources:[{label:"MIT CSAIL profile",url:"https://people.csail.mit.edu/brooks/"},{label:"iRobot history",url:"https://about.irobot.com/history"}] }),
  referenceProfile({ id:"muhammad-yunus", name:"Muhammad Yunus", role:"visionary", roleLabel:"Economist / Social Entrepreneur", institution:"Grameen Bank", country:"Bangladesh", rating:93, dob:"Jun 28, 1940", birth:"Chittagong, Bangladesh", edu:"University of Dhaka / Vanderbilt", domain:"Microfinance, Social Innovation", notable:"Grameen Bank, microcredit", era:"Late 20th century social innovation", century:"20th-21st centuries", decade:"1970s", livingStatus:"Living", innovationType:"social systems innovator", primaryMethod:"Institution building and social finance", impactLayer:"Societal", taxonomy:["Finance and digital commerce"], bio:"Muhammad Yunus founded Grameen Bank and popularized microcredit as a social-finance model for people excluded from conventional banking. He shared the 2006 Nobel Peace Prize with Grameen Bank.", contributions:["Founded Grameen Bank","Popularized microcredit and social business","Shared the 2006 Nobel Peace Prize","Influenced financial inclusion movements worldwide"], career:[{y:"1976",c:"Jobra",n:"Began lending experiments with poor entrepreneurs"},{y:"1983",c:"Grameen Bank",n:"Grameen Bank was established as an independent bank"},{y:"2006",c:"Nobel Peace Prize",n:"Shared the Nobel Peace Prize with Grameen Bank"}], influenceNetwork:"Development economics, grassroots banking, NGOs, social entrepreneurship, and financial inclusion policy.", criticalLens:"Microcredit has been criticized for debt stress, uneven poverty outcomes, and commercialization by lenders outside the original mission.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/peace/2006/yunus/facts/"},{label:"Grameen Bank history",url:"https://grameenbank.org/history/"}] }),
  referenceProfile({ id:"norman-borlaug", name:"Norman Borlaug", role:"scientist", roleLabel:"Agronomist", institution:"CIMMYT / Texas A&M", country:"USA", rating:95, dob:"Mar 25, 1914", birth:"Cresco, IA", edu:"University of Minnesota", domain:"Agriculture, Green Revolution", notable:"High-yield wheat, Green Revolution", era:"Postwar agriculture", century:"20th century", decade:"1950s", livingStatus:"Deceased", innovationType:"agricultural scientist", primaryMethod:"Applied research and agricultural deployment", impactLayer:"Societal", taxonomy:["Energy and environment","Biotech and medicine"], bio:"Norman Borlaug developed and deployed high-yield, disease-resistant wheat varieties that helped transform food production in Mexico, India, Pakistan, and beyond. His work made him a central figure of the Green Revolution and earned the 1970 Nobel Peace Prize.", contributions:["Developed high-yield dwarf wheat varieties","Helped launch the Green Revolution","Received the 1970 Nobel Peace Prize","Advanced applied agricultural research for food security"], career:[{y:"1944",c:"Mexico",n:"Joined the Rockefeller Foundation wheat program"},{y:"1960s",c:"South Asia",n:"Helped introduce new wheat varieties in India and Pakistan"},{y:"1970",c:"Nobel Peace Prize",n:"Received the Nobel Peace Prize"}], influenceNetwork:"Rockefeller Foundation programs, CIMMYT, national agriculture ministries, farmers, and food-security institutions.", criticalLens:"The Green Revolution increased yields but raised concerns about fertilizer dependence, water use, monocultures, and unequal rural benefits.", sources:[{label:"Nobel Prize facts",url:"https://www.nobelprize.org/prizes/peace/1970/borlaug/facts/"},{label:"World Food Prize biography",url:"https://www.worldfoodprize.org/en/dr_norman_e_borlaug/about_norman_borlaug/"}] })
];

const ALL_INNOVATORS = [...INNOVATORS, ...FOUNDATIONAL_INNOVATORS]
  .filter((person, index, list) => index === list.findIndex((item) => item.id === person.id));

const DIRECT_LINKS = {
  einstein: [{ label:"Einstein Papers", url:"https://einsteinpapers.press.princeton.edu/" }, { label:"Nobel Prize record", url:"https://www.nobelprize.org/prizes/physics/1921/einstein/facts/" }],
  curie: [{ label:"Nobel Prize record", url:"https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" }, { label:"Curie Museum", url:"https://musee.curie.fr/" }],
  turing: [{ label:"Turing Digital Archive", url:"https://turingarchive.kings.cam.ac.uk/" }, { label:"Stanford entry", url:"https://plato.stanford.edu/entries/turing/" }],
  tesla: [{ label:"Tesla Museum", url:"https://tesla-museum.org/en/home/" }, { label:"Britannica profile", url:"https://www.britannica.com/biography/Nikola-Tesla" }],
  mandela: [{ label:"Nelson Mandela Foundation", url:"https://www.nelsonmandela.org/" }, { label:"Nobel Prize record", url:"https://www.nobelprize.org/prizes/peace/1993/mandela/facts/" }],
  king: [{ label:"The King Center", url:"https://thekingcenter.org/" }, { label:"Nobel Prize record", url:"https://www.nobelprize.org/prizes/peace/1964/king/facts/" }],
  johnson: [{ label:"NASA Katherine Johnson", url:"https://www.nasa.gov/katherine-johnson/" }, { label:"NASA Science profile", url:"https://science.nasa.gov/people/katherine-johnson/" }],
  gandhi: [{ label:"Gandhi Heritage Portal", url:"https://www.gandhiheritageportal.org/" }, { label:"Britannica profile", url:"https://www.britannica.com/biography/Mahatma-Gandhi" }],
  carson: [{ label:"Silent Spring overview", url:"https://www.britannica.com/topic/Silent-Spring" }, { label:"Rachel Carson Council", url:"https://rachelcarsoncouncil.org/" }],
  lecun: [{ label:"Yann LeCun official page", url:"https://yann.lecun.com/" }, { label:"Meta AI", url:"https://ai.meta.com/" }, { label:"LeNet paper", url:"https://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf" }, { label:"NYU CDS", url:"https://cds.nyu.edu/" }],
  hinton: [{ label:"Geoffrey Hinton page", url:"https://www.cs.toronto.edu/~hinton/" }, { label:"Nobel Prize record", url:"https://www.nobelprize.org/prizes/physics/2024/hinton/facts/" }, { label:"Turing lecture", url:"https://amturing.acm.org/vp/hinton_4791679.cfm" }, { label:"Google AI", url:"https://ai.google/" }],
  altman: [{ label:"ChatGPT", url:"https://chatgpt.com/" }, { label:"OpenAI", url:"https://openai.com/" }, { label:"Y Combinator", url:"https://www.ycombinator.com/" }],
  andreessen: [{ label:"a16z", url:"https://a16z.com/" }, { label:"Netscape archive", url:"https://isp.netscape.com/" }],
  armstrong: [{ label:"Coinbase", url:"https://www.coinbase.com/" }, { label:"Base", url:"https://www.base.org/" }],
  benioff: [{ label:"Salesforce", url:"https://www.salesforce.com/" }, { label:"TIME", url:"https://time.com/" }],
  bezos: [{ label:"Amazon", url:"https://www.amazon.com/" }, { label:"AWS", url:"https://aws.amazon.com/" }, { label:"Blue Origin", url:"https://www.blueorigin.com/" }],
  brin: [{ label:"Google Search", url:"https://www.google.com/" }, { label:"Google X", url:"https://x.company/" }, { label:"Gemini", url:"https://gemini.google.com/" }],
  buterin: [{ label:"Ethereum", url:"https://ethereum.org/" }, { label:"Ethereum whitepaper", url:"https://ethereum.org/whitepaper/" }],
  carmack: [{ label:"DOOM", url:"https://bethesda.net/en/game/doom" }, { label:"Quake", url:"https://bethesda.net/en/game/quake" }, { label:"Oculus", url:"https://www.meta.com/quest/" }],
  chesky: [{ label:"Airbnb", url:"https://www.airbnb.com/" }],
  collison: [{ label:"Stripe", url:"https://stripe.com/" }, { label:"Stripe Atlas", url:"https://stripe.com/atlas" }, { label:"Arc Institute", url:"https://arcinstitute.org/" }],
  cook: [{ label:"Apple", url:"https://www.apple.com/" }, { label:"Apple Watch", url:"https://www.apple.com/watch/" }, { label:"Apple Silicon", url:"https://www.apple.com/mac/" }],
  dell: [{ label:"Dell Technologies", url:"https://www.delltechnologies.com/" }],
  dorsey: [{ label:"Block", url:"https://block.xyz/" }, { label:"Square", url:"https://squareup.com/" }, { label:"Bluesky", url:"https://bsky.app/" }],
  ek: [{ label:"Spotify", url:"https://open.spotify.com/" }, { label:"Spotify for Artists", url:"https://artists.spotify.com/" }],
  ellison: [{ label:"Oracle", url:"https://www.oracle.com/" }, { label:"Oracle Database", url:"https://www.oracle.com/database/" }, { label:"NetSuite", url:"https://www.netsuite.com/" }],
  gates: [{ label:"Microsoft", url:"https://www.microsoft.com/" }, { label:"Windows", url:"https://www.microsoft.com/windows/" }, { label:"Gates Foundation", url:"https://www.gatesfoundation.org/" }],
  hassabis: [{ label:"AlphaFold DB", url:"https://alphafold.ebi.ac.uk/" }, { label:"Google DeepMind", url:"https://deepmind.google/" }, { label:"AlphaFold GitHub", url:"https://github.com/google-deepmind/alphafold" }],
  hastings: [{ label:"Netflix", url:"https://www.netflix.com/" }, { label:"Netflix Tech Blog", url:"https://netflixtechblog.com/" }],
  hoffman: [{ label:"LinkedIn", url:"https://www.linkedin.com/" }, { label:"Greylock", url:"https://greylock.com/" }, { label:"Inflection AI", url:"https://inflection.ai/" }],
  houston: [{ label:"Dropbox", url:"https://www.dropbox.com/" }],
  huang: [{ label:"NVIDIA", url:"https://www.nvidia.com/" }, { label:"CUDA", url:"https://developer.nvidia.com/cuda-zone" }, { label:"NVIDIA AI", url:"https://www.nvidia.com/en-us/ai/" }],
  jobs: [{ label:"Apple", url:"https://www.apple.com/" }, { label:"iPhone", url:"https://www.apple.com/iphone/" }, { label:"Pixar", url:"https://www.pixar.com/" }],
  kalanick: [{ label:"Uber", url:"https://www.uber.com/" }, { label:"Uber Eats", url:"https://www.ubereats.com/" }, { label:"CloudKitchens", url:"https://www.cloudkitchens.com/" }],
  luckey: [{ label:"Anduril", url:"https://www.anduril.com/" }, { label:"Meta Quest", url:"https://www.meta.com/quest/" }],
  jackma: [{ label:"Alibaba", url:"https://www.alibaba.com/" }, { label:"Ant Group", url:"https://www.antgroup.com/" }, { label:"Alipay", url:"https://www.alipay.com/" }],
  ponyma: [{ label:"Tencent", url:"https://www.tencent.com/" }, { label:"WeChat", url:"https://www.wechat.com/" }, { label:"Riot Games", url:"https://www.riotgames.com/" }],
  moskovitz: [{ label:"Asana", url:"https://asana.com/" }, { label:"Good Ventures", url:"https://www.goodventures.org/" }],
  musk: [{ label:"Tesla", url:"https://www.tesla.com/" }, { label:"SpaceX", url:"https://www.spacex.com/" }, { label:"Starlink", url:"https://www.starlink.com/" }, { label:"X", url:"https://x.com/" }],
  nadella: [{ label:"Microsoft Azure", url:"https://azure.microsoft.com/" }, { label:"Microsoft Copilot", url:"https://copilot.microsoft.com/" }, { label:"OpenAI", url:"https://openai.com/" }],
  nakamoto: [{ label:"Bitcoin", url:"https://bitcoin.org/" }, { label:"Bitcoin whitepaper", url:"https://bitcoin.org/bitcoin.pdf" }, { label:"Bitcoin Core", url:"https://bitcoincore.org/" }],
  omidyar: [{ label:"eBay", url:"https://www.ebay.com/" }, { label:"Omidyar Network", url:"https://omidyar.com/" }],
  page: [{ label:"Google Search", url:"https://www.google.com/" }, { label:"Android", url:"https://www.android.com/" }, { label:"Alphabet", url:"https://abc.xyz/" }],
  pichai: [{ label:"Google Chrome", url:"https://www.google.com/chrome/" }, { label:"Android", url:"https://www.android.com/" }, { label:"Gemini", url:"https://gemini.google.com/" }],
  spiegel: [{ label:"Snapchat", url:"https://www.snapchat.com/" }, { label:"Snap AR", url:"https://ar.snap.com/" }, { label:"Spectacles", url:"https://www.spectacles.com/" }],
  su: [{ label:"AMD", url:"https://www.amd.com/" }, { label:"Ryzen", url:"https://www.amd.com/en/products/processors/desktops/ryzen.html" }, { label:"EPYC", url:"https://www.amd.com/en/products/processors/server/epyc.html" }],
  sweeney: [{ label:"Unreal Engine", url:"https://www.unrealengine.com/" }, { label:"Fortnite", url:"https://www.fortnite.com/" }, { label:"Epic Games Store", url:"https://store.epicgames.com/" }],
  systrom: [{ label:"Instagram", url:"https://www.instagram.com/" }, { label:"Artifact archive", url:"https://artifact.news/" }],
  thiel: [{ label:"PayPal", url:"https://www.paypal.com/" }, { label:"Palantir", url:"https://www.palantir.com/" }, { label:"Founders Fund", url:"https://foundersfund.com/" }],
  torvalds: [{ label:"Linux Kernel", url:"https://www.kernel.org/" }, { label:"Git", url:"https://git-scm.com/" }, { label:"Linux Foundation", url:"https://www.linuxfoundation.org/" }],
  wurman: [{ label:"TED", url:"https://www.ted.com/" }, { label:"TED talks", url:"https://www.ted.com/talks" }],
  zuck: [{ label:"Meta", url:"https://www.meta.com/" }, { label:"Facebook", url:"https://www.facebook.com/" }, { label:"Llama", url:"https://www.llama.com/" }]
};

const menuToggle = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");
const navLinks = document.querySelectorAll(".primary-menu a");
const sections = document.querySelectorAll("main section[id]");
const counters = document.querySelectorAll("[data-count]");
const backToTop = document.querySelector(".back-to-top");
const year = document.querySelector("#year");
const profileGrid = document.querySelector("#profile-grid");
const template = document.querySelector("#profile-card-template");
const searchInput = document.querySelector("#profile-search");
const categoryFilter = document.querySelector("#category-filter");
const centuryFilter = document.querySelector("#century-filter");
const roleFilter = document.querySelector("#role-filter");
const impactFilter = document.querySelector("#impact-filter");
const filterButtons = document.querySelectorAll(".filter-pill");
const dialog = document.querySelector("#profile-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog-close");
const emptyState = document.querySelector("#empty-state");
const footerVisionaryLinks = document.querySelector("#footer-visionary-links");
const topLinks = document.querySelectorAll('a[href="#top"]');

let activeTier = "all";
let activeCategory = "all";
let activeCentury = "all";
let activeRole = "all";
let activeImpact = "all";
let lastFocusedElement = null;
const REVIEW_STORAGE_KEY = "visionary-atlas-reviews";
const REVIEW_BACKEND = {
  provider: "supabase",
  url: "https://zzwaybomomkkkoeeypqi.supabase.co",
  anonKey: "sb_publishable_tUhOdXP6eIMQN40ohdYMnQ_TEgBcaNB",
  table: "visionary_reviews"
};
const onlineReviewCache = {};

if (year) {
  year.textContent = new Date().getFullYear();
}

const profileCountMetric = document.querySelector(".hero-stats [data-count]");
if (profileCountMetric) {
  profileCountMetric.dataset.count = String(ALL_INNOVATORS.length);
}

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const stripMarkup = (value) => String(value).replace(/<[^>]*>/g, "");

const statLabel = (key) => key.charAt(0).toUpperCase() + key.slice(1);

const initials = (name) => name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const familyNameKey = (name) => {
  const suffixes = new Set(["jr.", "jr", "sr.", "sr", "ii", "iii", "iv"]);
  const parts = name.replaceAll(".", ". ").trim().split(/\s+/).filter(Boolean);
  while (parts.length > 1 && suffixes.has(parts.at(-1).toLowerCase())) {
    parts.pop();
  }
  return `${parts.at(-1) || name} ${name}`.toLowerCase();
};

const TAXONOMY_CATEGORIES = [
  "Computing and software",
  "Internet and web",
  "AI and machine learning",
  "Semiconductors and hardware",
  "Consumer electronics",
  "Biotech and medicine",
  "Space and aerospace",
  "Energy and environment",
  "Design and human-computer interaction",
  "Finance and digital commerce",
  "Media, communication, and platforms",
  "Open source and infrastructure"
];

const inferTaxonomy = (person) => {
  const text = `${person.domain} ${person.notable} ${person.company}`.toLowerCase();
  return TAXONOMY_CATEGORIES.filter((category) => {
    const key = category.toLowerCase();
    if (key.includes("ai") && /ai|artificial|machine learning|deep learning|robot/.test(text)) return true;
    if (key.includes("semiconductors") && /chip|semiconductor|transistor|integrated|gpu|processor|hardware/.test(text)) return true;
    if (key.includes("internet") && /web|internet|browser|search|tcp|protocol/.test(text)) return true;
    if (key.includes("biotech") && /medicine|vaccine|crispr|health|protein|biology|mRNA|malaria/i.test(text)) return true;
    if (key.includes("space") && /space|aerospace|rocket|nasa|orbital/.test(text)) return true;
    if (key.includes("design") && /design|hci|interface|architecture|ux/.test(text)) return true;
    if (key.includes("finance") && /fintech|crypto|payment|commerce|bank|microfinance/.test(text)) return true;
    if (key.includes("media") && /media|social|streaming|communication|audio|photo/.test(text)) return true;
    if (key.includes("open source") && /linux|git|open source|infrastructure|operating/.test(text)) return true;
    if (key.includes("consumer") && /apple|consumer|iphone|airbnb|tesla|amazon|gaming|electronics/.test(text)) return true;
    if (key.includes("energy") && /environment|agriculture|electric|energy|climate/.test(text)) return true;
    return key.includes("computing") && /software|computing|computer|database|cloud|operating|programming/.test(text);
  });
};

const inferImpactLayer = (person) => {
  const text = `${person.domain} ${person.notable}`.toLowerCase();
  if (/transistor|integrated|protocol|linux|git|cloud|database|operating|web|internet/.test(text)) return "Infrastructural";
  if (/nobel|physics|medicine|crispr|information|algorithm|research|science/.test(text)) return "Scientific";
  if (/iphone|consumer|social|streaming|airbnb|uber|vacuum|gaming|music/.test(text)) return "Consumer";
  return "Societal";
};

const getProfileMeta = (person) => ({
  innovationType: person.role || "innovator",
  era: person.meta?.era || "Modern technology era",
  keyPlatform: person.meta?.keyPlatform || person.notable,
  primaryMethod: person.meta?.primaryMethod || (person.role === "founder" ? "Company building and commercialization" : "Research, invention, and translation"),
  impactLayer: person.meta?.impactLayer || inferImpactLayer(person),
  century: person.meta?.century || "20th-21st centuries",
  decade: person.meta?.decade || "Contemporary",
  livingStatus: person.meta?.livingStatus || (person.dob === "Unknown" ? "Unknown" : "Living or historically documented"),
  taxonomy: person.meta?.taxonomy?.length ? person.meta.taxonomy : inferTaxonomy(person),
  influenceNetwork: person.meta?.influenceNetwork || `${person.company}, ${person.domain}, and adjacent innovation ecosystems.`,
  criticalLens: person.meta?.criticalLens || "Evaluate through documented achievements, adoption, power, access, labor, environmental costs, and public-interest trade-offs.",
  tierGroup: person.meta?.tierGroup || "Tier 1: modern platform builder"
});

const getStoredReviews = () => {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const setStoredReviews = (reviews) => {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
};

const onlineReviewsEnabled = () => Boolean(REVIEW_BACKEND.url && REVIEW_BACKEND.anonKey);

const supabaseHeaders = () => ({
  apikey: REVIEW_BACKEND.anonKey,
  Authorization: `Bearer ${REVIEW_BACKEND.anonKey}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
});

const reviewEndpoint = (query = "") => {
  const base = REVIEW_BACKEND.url.replace(/\/$/, "");
  return `${base}/rest/v1/${REVIEW_BACKEND.table}${query}`;
};

const normalizeReview = (item) => ({
  rating: Number(item.rating),
  comment: item.comment || "",
  date: item.created_at
    ? new Date(item.created_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    : item.date
});

const getPersonReviews = (personId) => onlineReviewCache[personId] || getStoredReviews()[personId] || [];

async function fetchOnlineReviews(personId) {
  if (!onlineReviewsEnabled()) return getStoredReviews()[personId] || [];

  const query = `?person_id=eq.${encodeURIComponent(personId)}&select=rating,comment,created_at&order=created_at.desc&limit=50`;
  const response = await fetch(reviewEndpoint(query), { headers: supabaseHeaders() });
  if (!response.ok) throw new Error("Could not load online evaluations.");

  const rows = await response.json();
  onlineReviewCache[personId] = rows.map(normalizeReview);
  return onlineReviewCache[personId];
}

async function saveOnlineReview(personId, review) {
  if (!onlineReviewsEnabled()) throw new Error("Online evaluations are not configured.");

  const response = await fetch(reviewEndpoint(), {
    method: "POST",
    headers: supabaseHeaders(),
    body: JSON.stringify({
      person_id: personId,
      rating: review.rating,
      comment: review.comment
    })
  });

  if (!response.ok) throw new Error("Could not save the evaluation online.");
  return response.json();
}

const reviewSummary = (reviews) => {
  if (!reviews.length) {
    return { average: "No ratings yet", count: "Be first" };
  }

  const average = reviews.reduce((sum, item) => sum + Number(item.rating), 0) / reviews.length;
  return {
    average: `${average.toFixed(1)}/10`,
    count: `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`
  };
};

function renderProfiles() {
  if (!profileGrid || !template) return;

  const query = searchInput?.value.trim().toLowerCase() || "";
  const results = ALL_INNOVATORS.filter((person) => {
    const meta = getProfileMeta(person);
    const haystack = [
      person.name, person.role, person.rolel, person.company, person.country,
      person.domain, person.notable, person.tags, person.bio,
      meta.innovationType, meta.era, meta.keyPlatform, meta.primaryMethod,
      meta.impactLayer, meta.century, meta.decade, meta.taxonomy.join(" ")
    ].join(" ").toLowerCase();
    return (activeTier === "all" || person.tier === activeTier)
      && (activeCategory === "all" || meta.taxonomy.includes(activeCategory))
      && (activeCentury === "all" || meta.century === activeCentury)
      && (activeRole === "all" || meta.innovationType === activeRole || person.role === activeRole)
      && (activeImpact === "all" || meta.impactLayer === activeImpact)
      && haystack.includes(query);
  });

  profileGrid.innerHTML = "";
  emptyState.hidden = results.length > 0;

  results.forEach((person) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const viewer = card.querySelector("model-viewer");
    const fallback = card.querySelector(".model-fallback");
    const facts = card.querySelector(".mini-facts");
    const button = card.querySelector(".details-button");

    card.id = `visionary-${person.id}`;
    card.tabIndex = -1;
    viewer.src = person.model;
    viewer.alt = `3D model slot for ${person.name}`;
    fallback.textContent = "";
    fallback.dataset.initials = initials(person.name);
    fallback.style.setProperty("--accent-seed", `${person.rating * 3.6}deg`);

    card.dataset.tier = person.tier;
    card.querySelector(".profile-flag").textContent = person.flag;
    card.querySelector(".profile-tier").textContent = person.tier;
    card.querySelector(".profile-rating").textContent = `Evidence ${person.rating}`;
    card.querySelector(".profile-meta").textContent = `${person.rolel} | ${person.company}`;
    card.querySelector("h3").textContent = person.name;
    card.querySelector(".profile-summary").textContent = person.bio;

    facts.innerHTML = `
      <div><dt>Domain</dt><dd>${escapeHtml(person.domain)}</dd></div>
      <div><dt>Born</dt><dd>${escapeHtml(person.dob)}</dd></div>
      <div><dt>Education</dt><dd>${escapeHtml(person.edu)}</dd></div>
      <div><dt>Notable</dt><dd>${escapeHtml(person.notable)}</dd></div>
    `;

    button.addEventListener("click", () => openProfile(person));
    profileGrid.append(card);
  });
}

function renderFooterIndex() {
  if (!footerVisionaryLinks) return;

  footerVisionaryLinks.innerHTML = [...ALL_INNOVATORS]
    .sort((a, b) => familyNameKey(a.name).localeCompare(familyNameKey(b.name)))
    .map((person) => `<a href="#visionary-${escapeHtml(person.id)}" data-visionary-target="${escapeHtml(person.id)}">${escapeHtml(person.name)}</a>`)
    .join("");

  footerVisionaryLinks.querySelectorAll("[data-visionary-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      setTimeout(() => jumpToVisionary(link.dataset.visionaryTarget), 0);
    });
  });
}

function jumpToVisionary(personId) {
  activeTier = "all";
  activeCategory = "all";
  activeCentury = "all";
  activeRole = "all";
  activeImpact = "all";
  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "all";
  if (centuryFilter) centuryFilter.value = "all";
  if (roleFilter) roleFilter.value = "all";
  if (impactFilter) impactFilter.value = "all";
  filterButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.tier === "all"));
  renderProfiles();

  requestAnimationFrame(() => {
    const card = document.getElementById(`visionary-${personId}`);
    if (!card) return;
    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
    const top = card.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
    window.scrollTo({ top });
    card.focus({ preventScroll: true });
    history.replaceState(null, "", `#visionary-${personId}`);
  });
}

function openProfile(person) {
  if (!dialog || !dialogContent) return;
  const reviews = getPersonReviews(person.id);
  const summary = reviewSummary(reviews);
  const directLinks = person.links || DIRECT_LINKS[person.id] || [];
  const meta = getProfileMeta(person);
  const primaryContribution = stripMarkup(person.achs?.[0]?.t || person.notable);

  dialogContent.innerHTML = `
    <header class="dialog-hero">
      <div>
        <p class="eyebrow">${escapeHtml(person.tier)} profile | ${escapeHtml(person.country)} ${person.flag}</p>
        <h2 id="dialog-title">${escapeHtml(person.name)}</h2>
        <p>${escapeHtml(person.rolel)} at ${escapeHtml(person.company)}. Focus: ${escapeHtml(person.domain)}.</p>
      </div>
    </header>

    <section class="detail-panel record-model-panel">
      <div class="dialog-model-frame dialog-model-frame--large">
        <model-viewer
          src="${escapeHtml(person.model)}"
          alt="Interactive 3D model for ${escapeHtml(person.name)}"
          camera-controls
          auto-rotate
          ar
          shadow-intensity="0.8"
          exposure="0.9"
          interaction-prompt="auto"
        ></model-viewer>
        <div class="dialog-model-fallback" style="--accent-seed:${person.rating * 3.6}deg" data-initials="${escapeHtml(initials(person.name))}" aria-hidden="true"></div>
      </div>
    </section>

    <div class="detail-grid">
      <section class="detail-panel">
        <h3>Personal Snapshot</h3>
        <dl class="fact-list">
          <div><dt>Date of birth</dt><dd>${escapeHtml(person.dob)}</dd></div>
          <div><dt>Birthplace</dt><dd>${escapeHtml(person.birth)}</dd></div>
          <div><dt>Country / Region</dt><dd>${escapeHtml(person.country)} ${person.flag}</dd></div>
          <div><dt>Education</dt><dd>${escapeHtml(person.edu)}</dd></div>
          <div><dt>Role</dt><dd>${escapeHtml(person.role)}</dd></div>
          <div><dt>Company</dt><dd>${escapeHtml(person.company)}</dd></div>
          <div><dt>Primary domain</dt><dd>${escapeHtml(person.domain)}</dd></div>
          <div><dt>Status</dt><dd>${escapeHtml(meta.livingStatus)}</dd></div>
        </dl>
      </section>

      <section class="detail-panel important-panel">
        <h3>Most Important</h3>
        <p class="important-lead">${escapeHtml(primaryContribution)}</p>
        <dl class="fact-list">
          <div><dt>Known for</dt><dd>${escapeHtml(person.notable)}</dd></div>
          <div><dt>Why it matters</dt><dd>${escapeHtml(person.bio.split(".")[0])}.</dd></div>
        </dl>
      </section>
    </div>

    <section class="detail-panel context-panel">
      <h3>Innovation Context</h3>
      <dl class="fact-list">
        <div><dt>Innovation type</dt><dd>${escapeHtml(meta.innovationType)}</dd></div>
        <div><dt>Era</dt><dd>${escapeHtml(meta.era)}</dd></div>
        <div><dt>Century / decade</dt><dd>${escapeHtml(meta.century)} | ${escapeHtml(meta.decade)}</dd></div>
        <div><dt>Key platform</dt><dd>${escapeHtml(meta.keyPlatform)}</dd></div>
        <div><dt>Primary method</dt><dd>${escapeHtml(meta.primaryMethod)}</dd></div>
        <div><dt>Impact layer</dt><dd>${escapeHtml(meta.impactLayer)}</dd></div>
      </dl>
      <div class="taxonomy-chips">
        ${meta.taxonomy.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>

    <section class="detail-panel context-panel">
      <h3>Historical Placement</h3>
      <p><strong>Influence network:</strong> ${escapeHtml(meta.influenceNetwork)}</p>
      <p><strong>Critical lens:</strong> ${escapeHtml(meta.criticalLens)}</p>
      <p><strong>Portal tier:</strong> ${escapeHtml(meta.tierGroup)}</p>
    </section>

    <div class="detail-grid">
      <section class="detail-panel">
        <h3>Impact Scores</h3>
        <div class="score-total"><strong>${person.rating}</strong><span>evidence-informed score</span></div>
        <p class="score-note">These scores are editorial research indicators, not official verified facts. They are interpreted from documented achievements such as technical creation, product adoption, company scale, market influence, execution record, and cultural or institutional impact.</p>
        <div class="stat-bars">
          ${Object.entries(person.stats).map(([key, value]) => `
            <div class="stat-row">
              <span>${escapeHtml(statLabel(key))}</span>
              <div class="stat-track"><i style="width:${value}%"></i></div>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
      </section>
    </div>

    <section class="detail-panel">
      <h3>Profile</h3>
      <p>${escapeHtml(person.bio)}</p>
    </section>

    ${person.sources ? `
      <section class="detail-panel source-record">
        <h3>Verified Sources</h3>
        <ul>
          ${person.sources.map((source) => `
            <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>
          `).join("")}
        </ul>
      </section>
    ` : ""}

    ${directLinks.length ? `
      <section class="detail-panel direct-links">
        <h3>Direct Access Links</h3>
        <p>Official project, product, archive, or institution links related to this visionary's work.</p>
        <ul>
          ${directLinks.map((link) => `
            <li><a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a></li>
          `).join("")}
        </ul>
      </section>
    ` : ""}

    <div class="detail-grid">
      <section class="detail-panel">
        <h3>Major Achievements</h3>
        <ul class="achievement-list">
          ${person.achs.map((item) => `<li><span>${item.i}</span><p>${item.t}</p></li>`).join("")}
        </ul>
      </section>
      <section class="detail-panel">
        <h3>Career Timeline</h3>
        <ol class="timeline">
          ${person.career.map((item) => `<li><time>${escapeHtml(item.y)}</time><strong>${escapeHtml(item.c)}</strong><p>${escapeHtml(item.n)}</p></li>`).join("")}
        </ol>
      </section>
    </div>

    <section class="detail-panel community-panel" data-review-panel="${escapeHtml(person.id)}">
      <div class="community-heading">
        <div>
          <h3>Visitor Evaluation</h3>
          <p>Rate this visionary from 1 to 10 and add an optional comment. When online sync is configured, reviews are saved to the shared public database.</p>
        </div>
        <div class="community-score" aria-live="polite">
          <strong data-review-average>${escapeHtml(summary.average)}</strong>
          <span data-review-count>${escapeHtml(summary.count)}</span>
        </div>
      </div>

      <form class="review-form" data-review-form>
        <fieldset class="rating-field">
          <legend>Your rating</legend>
          <div class="rating-options">
            ${Array.from({ length: 10 }, (_, index) => {
              const value = index + 1;
              return `
                <label>
                  <input type="radio" name="rating" value="${value}" ${value === 10 ? "checked" : ""}>
                  <span>${value}</span>
                </label>
              `;
            }).join("")}
          </div>
        </fieldset>
        <label class="comment-field">
          <span>Optional comment</span>
          <textarea name="comment" rows="4" maxlength="500" placeholder="Share a concise reason for your score"></textarea>
        </label>
        <button class="details-button" type="submit">Save evaluation</button>
        <p class="review-feedback" data-review-feedback aria-live="polite"></p>
      </form>

      <div class="review-list" data-review-list>
        ${renderReviewList(reviews)}
      </div>
    </section>
    `;

  bindReviewForm(person.id);
  refreshReviewPanel(person.id);
  lastFocusedElement = document.activeElement;
  dialog.hidden = false;
  dialog.querySelector(".dialog-close")?.focus();
}

function renderReviewList(reviews) {
  if (!reviews.length) {
    return `<p class="empty-reviews">No visitor evaluations have been added yet.</p>`;
  }

  return `
    <h4>Recent evaluations</h4>
    <ul>
      ${reviews.slice().reverse().slice(0, 6).map((review) => `
        <li>
          <strong>${escapeHtml(review.rating)}/10</strong>
          <p>${review.comment ? escapeHtml(review.comment) : "No comment added."}</p>
          <time>${escapeHtml(review.date)}</time>
        </li>
      `).join("")}
    </ul>
  `;
}

function updateReviewPanel(personId, reviews, message = "") {
  const panel = dialogContent.querySelector(`[data-review-panel="${CSS.escape(personId)}"]`);
  if (!panel) return;

  const summary = reviewSummary(reviews);
  panel.querySelector("[data-review-average]").textContent = summary.average;
  panel.querySelector("[data-review-count]").textContent = summary.count;
  panel.querySelector("[data-review-list]").innerHTML = renderReviewList(reviews);
  const feedback = panel.querySelector("[data-review-feedback]");
  if (feedback && message) feedback.textContent = message;
}

async function refreshReviewPanel(personId) {
  const message = onlineReviewsEnabled()
    ? "Loading shared online evaluations..."
    : "Online evaluation sync is not configured yet; this browser is using local-only storage.";
  updateReviewPanel(personId, getPersonReviews(personId), message);

  if (!onlineReviewsEnabled()) return;

  try {
    const reviews = await fetchOnlineReviews(personId);
    updateReviewPanel(personId, reviews, "Shared online evaluations loaded.");
  } catch (error) {
    updateReviewPanel(personId, getPersonReviews(personId), "Online evaluations could not be loaded right now.");
  }
}

function bindReviewForm(personId) {
  const panel = dialogContent.querySelector(`[data-review-panel="${CSS.escape(personId)}"]`);
  const form = panel?.querySelector("[data-review-form]");
  const feedback = panel?.querySelector("[data-review-feedback]");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const rating = Number(formData.get("rating"));
    const comment = String(formData.get("comment") || "").trim();

    if (!rating || rating < 1 || rating > 10) {
      feedback.textContent = "Please choose a rating from 1 to 10.";
      return;
    }

    const allReviews = getStoredReviews();
    const nextReview = {
      rating,
      comment,
      date: new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    };

    feedback.textContent = onlineReviewsEnabled()
      ? "Saving evaluation online..."
      : "Saving evaluation in this browser. Configure online sync to share it with every visitor.";

    if (onlineReviewsEnabled()) {
      try {
        await saveOnlineReview(personId, nextReview);
        const reviews = await fetchOnlineReviews(personId);
        updateReviewPanel(personId, reviews, "Evaluation saved online for all visitors.");
      } catch (error) {
        feedback.textContent = "Online save failed. Please try again in a moment.";
        return;
      }
    } else {
      allReviews[personId] = [...(allReviews[personId] || []), nextReview];
      setStoredReviews(allReviews);
      updateReviewPanel(personId, allReviews[personId], "Evaluation saved locally. Online sync is not configured yet.");
    }

    form.reset();
    const defaultRating = form.querySelector('input[name="rating"][value="10"]');
    if (defaultRating) defaultRating.checked = true;
  });
}

if (menuToggle && primaryMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      primaryMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (sections.length && navLinks.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-34% 0px -52% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => activeObserver.observe(section));
}

if (counters.length) {
  const countObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = Number(entry.target.dataset.count);
        const start = performance.now();
        const duration = 900;
        const update = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          entry.target.textContent = String(Math.round(target * progress));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => countObserver.observe(counter));
}

searchInput?.addEventListener("input", renderProfiles);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTier = button.dataset.tier || "all";
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProfiles();
  });
});

categoryFilter?.addEventListener("change", () => {
  activeCategory = categoryFilter.value;
  renderProfiles();
});

centuryFilter?.addEventListener("change", () => {
  activeCentury = centuryFilter.value;
  renderProfiles();
});

roleFilter?.addEventListener("change", () => {
  activeRole = roleFilter.value;
  renderProfiles();
});

impactFilter?.addEventListener("change", () => {
  activeImpact = impactFilter.value;
  renderProfiles();
});

topLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0 });
    history.replaceState(null, "", "#top");
  });
});

window.addEventListener("hashchange", () => {
  if (!location.hash.startsWith("#visionary-")) return;
  jumpToVisionary(location.hash.replace("#visionary-", ""));
});

function closeProfile() {
  if (!dialog) return;
  dialog.hidden = true;
  lastFocusedElement?.focus?.();
}

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProfile();
});

dialogClose?.addEventListener("click", closeProfile);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog && !dialog.hidden) closeProfile();
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

renderProfiles();
renderFooterIndex();

const jumpToInitialHash = () => {
  if (!location.hash.startsWith("#visionary-")) return;
  jumpToVisionary(location.hash.replace("#visionary-", ""));
};

setTimeout(jumpToInitialHash, 150);
setTimeout(jumpToInitialHash, 700);
window.addEventListener("load", () => {
  setTimeout(jumpToInitialHash, 150);
  setTimeout(jumpToInitialHash, 700);
});

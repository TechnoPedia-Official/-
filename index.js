try {
    let container = document.getElementById('container')
    let technology_selector = document.getElementById('type')
    let country_selector = document.getElementById('country')

    let ar_heads = [
        // For Pakistan

        // AI Down Here

        'AI for Smarter Farming',
        'Diagnosing Diseases with AI',
        'AI-Powered Financial Security',
        'Understanding Local Languages',
        'Smarter City Traffic Management',
        // Cyber Down Here
        'National Firewall Deployment',
        'National CERT Initiatives',
        'Digital Banking Security Upgrades',
        'Cybersecurity Education Expansion',
        'Secure E-Governance Platforms',
        'Bug Bounty Programs Launch',
        'Critical Infrastructure Defense',
        // Software Technology
        'Freelancing Powerhouse Goes Global',
        'Local SaaS Solves Local Problems',
        'Gaming Industry Level Up',
        'Open Source Community Grows',
        'ERP Solutions for Local Enterprises',
        // Communication Technology
        '5G Rollout Begins in Major Cities',
        'Fiber-Optic National Network Expands',
        'Satellite Internet Reaches Remote Areas',
        'Secure Government Communication Network',
        'VoIP and OTT Services Regulations',
        // Machinery Technology
        'Agricultural Machinery Modernization',
        'Textile Manufacturing Automation',
        'Construction Equipment Upgrades',
        'Local Automotive Assembly Expansion',
        'Defense Production Machinery',

        // For America

        // AI Technology
        "National AI Research Resource",
        "Generative AI Enterprise Integration",
        "The Rise of Agentic AI",
        "US Chip Dominance Challenge",
        "AI Regulation Framework Advances",

        // For Cyber
        "Quantum-Resistant Cryptography Standardization",
        "AI-Powered Autonomous Cyber Defense",
        "Zero-Trust Architecture Federal Mandate",
        "Critical Infrastructure Cyber Resilience",
        "Unified Cyber Force Deployment",

        // For Software
        "The Rise of Cloud Computing in America",
        "Artificial Intelligence Shaping the U.S. Software Industry",
        "Cybersecurity Advancements in the U.S. Tech Sector",
        "The Role of Fintech in America’s Digital Economy",
        "Software Development Trends in the United States",

        // Communication Technology

        "The Transformation of Communication Technology in America",
        "5G Networks Powering the U.S. Digital Revolution",
        "Satellite Communication and Space-Based Connectivity in the U.S.",
        "Internet of Things (IoT) Expanding Communication Across America",
        "Future of Communication Technology in the United States",

        // Machinery Technology

        "The Evolution of Machinery Technology in America",
        "Smart Manufacturing and Automation in U.S. Industries",
        "Agricultural Machinery Advancing American Farming",
        "Heavy Construction Machinery Driving U.S. Infrastructure",
        "The Future of Sustainable Machinery in America",

        // For Japan

        // For AI

        "Japan’s Push for Next-Gen AI in Robotics and Automation",
        "Tokyo Leads Global AI Healthcare Innovations",
        "AI-Powered Smart Cities Transforming Japan’s Urban Life",
        "Japanese Universities Driving Breakthroughs in AI Research",
        "Government and Industry Collaboration Fuels Japan’s AI Ecosystem",

        // For CyberSecurity

        "Japan Strengthens Cybersecurity Against Rising Global Threats",
        "AI-Powered Cyber Defense Systems Transforming Japan’s Digital Security",
        "Tokyo Invests in Next-Gen Cybersecurity Talent Development",
        "Public-Private Partnerships Driving Japan’s Cyber Resilience",
        "Japan’s Role in Shaping International Cybersecurity Standards",

        // For Software

        "Japan Accelerates Software Development with AI-Driven Tools",
        "Tokyo’s Startups Revolutionizing Global Software Solutions",
        "Cloud Computing Adoption Reshaping Japan’s Tech Industry",
        "Open-Source Collaboration Gaining Momentum in Japan",
        "Government Initiatives Boosting Japan’s Software Innovation",
        // For Communication

        "Japan Pioneers 6G Communication Networks for the Future",
        "Tokyo Expands Nationwide 5G Infrastructure",
        "Satellite Communication Advancements Strengthening Japan’s Connectivity",
        "AI Integration Enhancing Japan’s Telecommunication Services",
        "Japan’s Role in Shaping Global Communication Standards",

        // For Machinery

        "Japan Innovates Smart Machinery with AI and IoT Integration",
        "Robotics and Automation Transforming Japan’s Manufacturing Sector",
        "Sustainable Machinery Driving Japan’s Green Industry",
        "Precision Engineering Advancing Japan’s Global Machinery Exports",
        "Government and Industry Collaboration Boosting Machinery Innovation",

        // For China

        // AI Technology

        "China Leads Global AI Development with Expanding Research",
        "AI-Powered Healthcare Innovations Transform China’s Medical Sector",
        "China’s Smart City Projects Driven by Artificial Intelligence",
        "AI in Education Revolutionizing Learning Across China",
        "Government Policies Boost China’s AI Industry Growth",

        // Cyber Technology

        "China Strengthens Cybersecurity with New National Regulations",
        "AI-Driven Cyber Defense Systems Expanding in China",
        "China’s Cybersecurity Industry Reaches Multi-Billion Dollar Growth",
        "International Concerns Over China’s Advanced Cyber Capabilities",
        "Collaboration Between Government and Tech Firms Enhancing Cyber Protection",

        // Software Technology

        "China Accelerates Development of Homegrown Operating Systems",
        "AI Integration Reshaping China’s Software Industry",
        "China’s Cloud Computing Sector Achieves Record Growth",
        "Open-Source Innovation Expands in Chinese Tech Ecosystem",
        "Government Investment Driving Next-Gen Software Solutions",

        // Communication Technology

        "China Expands 5G Networks to Rural and Remote Areas",
        "Satellite Internet Projects Strengthen China’s Global Connectivity",
        "6G Research Accelerates with Government and Industry Collaboration",
        "AI-Powered Communication Platforms Transform Business Interactions",
        "China Advances Secure Quantum Communication Systems",

        // Machinery Technology

        "China Boosts Smart Manufacturing with AI-Driven Machinery",
        "Electric and Autonomous Construction Equipment Gaining Momentum",
        "China’s Agricultural Machinery Industry Embraces Robotics",
        "Green Manufacturing Machines Reduce Carbon Emissions",
        "High-End CNC Machines Strengthen China’s Industrial Competitiveness",

        // For India

        // AI Technology
        "India’s AI Research Expands with Global Collaborations",
        "Healthcare AI Solutions Revolutionize Patient Care in India",
        "AI Startups in India Attract Record Investments",
        "Government Push for Ethical AI Development",
        "AI in Education Transforming Learning Methods",

        // Cyber Technology
        "India Strengthens Cybersecurity with National Initiatives",
        "Rise of Cybersecurity Startups in India",
        "AI-Powered Threat Detection Tools Gain Momentum",
        "Government Launches Cyber Awareness Programs",
        "Financial Sector Boosts Cyber Defense Capabilities",

        // Software Technology
        "India Leads in SaaS Startups with Global Reach",
        "Cloud Computing Services Transform Indian Enterprises",
        "Fintech Software Innovations Strengthen Digital Payments",
        "India’s Open-Source Contributions Grow Rapidly",
        "Government Support for Indigenous Software Development",

        // Communication Technology
        "India Expands 5G Infrastructure Nationwide",
        "Satellite Communication Projects Strengthen Connectivity",
        "Affordable Smartphones Boost Digital Access",
        "IoT Communication Networks Power Smart Cities",
        "Telecom Giants Push for Indigenous 6G Research",

        // Machinery Technology
        "India Pushes Smart Manufacturing with Industry 4.0 Machinery",
        "Electric and Automated Construction Equipment Gains Popularity",
        "Agri-Machinery Innovation Driving Precision Farming in India",
        "Sustainable Machinery Development Reducing Industrial Emissions",
        "High-Precision CNC Machines Strengthen India’s Export Potential",
    ]
    let ar_sub_heads = [
        // For Pakistan

        // AI Down Here

        'Boosting crop yields with predictive analytics.',
        'Revolutionizing medical imaging and patient care.',
        'Preventing fraud in digital banking.',
        'Urdu and regional language NLP advances.',
        'Using AI to reduce urban congestion.',


        // Cyber Down Here
        'Filtering harmful content at national scale.',
        'Proactive national cyber threat response.',
        'Implementing advanced fraud prevention systems.',
        'Universities launch new cyber defense degrees.',
        'Protecting citizen data and government services.',
        'Ethical hackers help find vulnerabilities.',
        'Shielding energy and transport networks.',
        // Software Technology
        'Pakistani developers dominate international software outsourcing.',
        'Homegrown software for Pakistani retail and finance.',
        'Pakistani mobile games gain international popularity.',
        'Pakistani coders contributing to global tech projects.',
        'Custom enterprise software transforming large businesses.',
        // Communication Technology
        'Next-generation mobile networks launch commercially.',
        'High-speed broadband connectivity reaches new regions.',
        'Bridging the digital divide from space.',
        'Encrypted official messaging and data exchange.',
        'Policy framework for internet-based communication.',
        // Machinery Technology
        "Tractors and harvesters boost farm productivity.",
        "High-tech looms and automated stitching systems.",
        "Advanced machinery for infrastructure development.",
        "Domestic production of vehicles and parts.",
        "Indigenous manufacturing of defense equipment.",

        // For America

        // AI Technology

        "Democratizing access to powerful computing resources for innovation.",
        "Transforming business operations and boosting productivity gains.",
        "AI systems that autonomously plan and execute complex tasks.",
        "Maintaining leadership in semiconductor manufacturing for AI.",
        "Balancing innovation with safety and ethical guidelines.",

        // Cyber Technology

        "NIST leads global effort to develop post-quantum encryption algorithms.",
        "Machine learning systems that predict, detect, and neutralize threats in real-time.",
        "Mandating 'never trust, always verify' for all government networks.",
        "Hardening energy, financial, and transportation grids against sophisticated attacks.",
        "Integrating military and intelligence cyber commands for coordinated response.",

        // For Software

        "How U.S. Companies Lead the Future of Cloud Technology",
        "AI and Machine Learning: The Backbone of Modern Tech in America",
        "Protecting Data and Digital Infrastructure in America",
        "How U.S. Software Innovations Transform Finance",
        "Agile, DevOps, and Future of Programming in America",

        // Communication Technology

        "How America Leads the World in Modern Communication Systems",
        "Ultra-Fast Connectivity Driving Innovation and Smart Cities",
        "From SpaceX to NASA: America’s Role in Global Satellite Networks",
        "Smart Devices and Connected Systems Changing Everyday Life",
        "AI, Quantum Networks, and the Next Era of U.S. Communication",

        // Machinery Technology

        "How Innovation in Machinery Shaped Industrial Growth in the United States",
        "Robotics, AI, and Automation Transforming American Manufacturing",
        "Modern Farm Equipment Boosting Efficiency and Productivity",
        "Cranes, Excavators, and Bulldozers Powering Nation-Building Projects",
        "Green Engineering and Digital Tools Defining the Next Era of Machinery",

        // For Japan

        // For AI

        "Transforming industries with AI-powered robotics.",
        "AI transforming healthcare and medical research.",
        "Building sustainable, intelligent urban ecosystems.",
        "Academic excellence fueling global AI advancements.",
        "Strategic policies shaping the future of AI.",

        // For Cyber

        "Advanced strategies to counter evolving cyberattacks.",
        "Artificial intelligence at the core of modern cyber defense.",
        "Building the next generation of cybersecurity professionals.",
        "Collaboration fueling innovation in digital protection.",
        "Global leadership in ethical and secure digital frameworks.",

        // For Software

        "Artificial intelligence transforming the way software is built.",
        "Innovative startups creating world-class digital platforms.",
        "Cloud technologies driving scalability and modernization.",
        "Developers embracing open-source for faster innovation.",
        "Policies fueling growth in Japan’s software ecosystem.",
        // For Communication

        "Pushing beyond 5G with groundbreaking 6G research.",
        "Next-gen mobile networks transforming daily life and business.",
        "Space-based communication bridging remote regions.",
        "Artificial intelligence optimizing telecom experiences.",
        "Global leadership in secure and efficient communication frameworks.",

        // For Machinery

        "Intelligent machines reshaping industrial performance.",
        "Automation revolutionizing factories across Japan.",
        "Eco-friendly designs powering the green transition.",
        "High-precision tools strengthening export competitiveness.",
        "Strategic alliances fueling next-gen machinery development.",

        // For China

        // AI Technology

        "Expanding research labs shaping China’s AI dominance.",
        "Medical AI tools improving diagnostics and treatment.",
        "Smart infrastructure powered by artificial intelligence.",
        "AI-driven learning platforms transforming classrooms.",
        "Strategic policies accelerating AI adoption nationwide.",

        // Cyber Technology

        "New laws tighten control over data security and cyber practices.",
        "Artificial intelligence transforming cyber defense strategies.",
        "Domestic companies fueling rapid industry expansion.",
        "Global powers address risks from China’s digital reach.",
        "Unified efforts boosting resilience against cyber threats.",

        // Software Technology

        "Domestic OS platforms gaining traction over foreign alternatives.",
        "Artificial intelligence enhancing enterprise and consumer applications.",
        "Cloud services adoption fueling digital transformation.",
        "Collaborative coding culture fostering rapid advancements.",
        "Strategic funding strengthening national software capabilities.",

        // Communication Technology

        "Extending high-speed mobile access beyond urban centers.",
        "Low-orbit satellites boosting internet coverage worldwide.",
        "Next-gen research paving the way for ultra-fast networks.",
        "Artificial intelligence redefining corporate communication tools.",
        "Quantum networks enhancing cybersecurity and privacy.",

        // Machinery Technology

        "Artificial intelligence powering next-generation factory equipment.",
        "Automation and electrification reshaping construction machinery.",
        "Robotics transforming crop harvesting and food production.",
        "Sustainable machinery innovations driving eco-friendly factories.",
        "Precision engineering boosting global market leadership.",

        // For India

        // AI Technology
        "Collaborations with US and EU institutions accelerate India’s AI research output.",
        "AI tools improve diagnostics and remote healthcare delivery across India.",
        "Record funding boosts AI-driven startups in finance, retail, and logistics.",
        "Ethical guidelines ensure responsible and transparent AI use in India.",
        "AI-powered learning platforms personalize education for millions of students.",

        // Cyber Technology
        "National Cybersecurity Coordination Centre enhances real-time monitoring.",
        "New startups provide advanced defense against digital threats.",
        "AI-based detection tools safeguard enterprises from evolving attacks.",
        "Campaigns increase awareness of online safety for citizens.",
        "Banks and fintechs strengthen digital payment security with AI.",

        // Software Technology
        "Indian SaaS companies expand services to global markets.",
        "Cloud platforms drive business transformation in enterprises.",
        "Fintech solutions enhance mobile and online transactions.",
        "Developers contribute to major open-source projects worldwide.",
        "Policies promote growth of indigenous software and innovation.",

        // Communication Technology
        "5G services now cover metros and rural areas of India.",
        "Satellite internet projects expand nationwide digital reach.",
        "Affordable smartphones increase connectivity in rural regions.",
        "IoT networks power India’s smart city projects.",
        "Research labs explore indigenous 6G development.",

        // Machinery Technology
        "Industry 4.0 tools optimize India’s manufacturing sector.",
        "Automated machinery enhances construction efficiency.",
        "Agri-tech machines boost farmer productivity and sustainability.",
        "Eco-friendly machinery lowers industrial carbon footprint.",
        "Advanced CNC systems improve global competitiveness.",
    ]
    let ar_descriptions = [
        // For Pakistan

        // AI Technology
        "In 2025, Pakistan’s Agri-Tech sector is experiencing a major transformation with Artificial Intelligence driving smarter farming practices. AI-powered platforms combine satellite imagery, drone surveys, and weather forecasting to predict crop diseases, pest outbreaks, and irrigation needs well in advance. Farmers are now receiving real-time recommendations through mobile apps in regional languages, helping them cut costs, improve soil management, and increase yields. This technology is reducing food insecurity and strengthening Pakistan’s agricultural exports, making farming more resilient to climate change.",

        "Artificial Intelligence is reshaping healthcare in Pakistan by enabling faster and more precise diagnostics. Local startups and research institutions are deploying AI systems that can read X-rays, MRIs, and CT scans with near-human accuracy, detecting illnesses like tuberculosis, heart disease, and cancer at early stages. AI-powered telemedicine solutions are bridging the rural healthcare gap by connecting patients with doctors remotely. This digital transformation is saving lives, reducing medical errors, and making quality healthcare more affordable and accessible for millions of people.",

        "Pakistan’s booming digital payments sector is now backed by AI-powered financial security. Banks, fintech firms, and e-commerce platforms use advanced algorithms to monitor transactions in real time, detect fraud instantly, and protect customer accounts. These systems adapt to user behavior, ensuring both safety and convenience for online banking, mobile wallets, and digital shopping. With the State Bank pushing for stronger cybersecurity measures, AI is building trust in the country’s financial ecosystem and boosting confidence in Pakistan’s digital economy.",

        "Natural Language Processing (NLP) powered by Artificial Intelligence is breaking down communication barriers in Pakistan. AI systems now understand and process Urdu, Punjabi, Sindhi, Pashto, and other regional languages, powering smart chatbots, translation tools, and customer service platforms. Businesses are using these solutions to engage more effectively with customers, while government institutions deploy them for digital services and education. By making technology more inclusive, AI-driven language tools are empowering millions of Pakistanis and expanding digital access across the nation.",

        "Major cities in Pakistan are embracing AI-powered traffic management systems to combat congestion and pollution. Using live camera feeds and IoT sensors, AI analyzes vehicle flow in real time and adjusts traffic lights to optimize road usage. Pilot projects in Karachi, Lahore, and Islamabad have already shown reductions in travel time and fuel consumption. With rising urbanization, these smart mobility solutions are helping Pakistan move towards cleaner, safer, and more sustainable urban transport systems.",

        // Cyber Technology
        "Pakistan has enhanced its digital security infrastructure with the deployment of a nationwide firewall and traffic monitoring system. This advanced framework blocks malicious websites, phishing attempts, and harmful content, while also protecting citizens from large-scale cyberattacks. Although discussions continue about digital rights and online freedom, the system represents a major step forward in national cybersecurity readiness and resilience against global cyber threats.",

        "The National Computer Emergency Response Team (CERT) in Pakistan plays a crucial role in strengthening the country’s cyber defenses. In 2025, it is more proactive than ever, detecting vulnerabilities, sharing real-time threat intelligence, and coordinating rapid responses to cyber incidents across industries. By working closely with government agencies, banks, and telecom providers, CERT helps safeguard national infrastructure like power grids, transport networks, and financial systems from advanced cyberattacks.",

        "With the rapid growth of digital banking, Pakistan has introduced stronger cybersecurity regulations and fraud prevention systems. Banks now employ real-time AI-driven monitoring tools, multi-factor authentication, and secure payment gateways to protect customers. These innovations, guided by the State Bank of Pakistan, are helping financial institutions build consumer trust while ensuring the long-term stability of the country’s digital economy.",

        "Pakistan is addressing its cybersecurity talent shortage by expanding specialized education programs nationwide. Leading universities now offer undergraduate and postgraduate degrees in cyber defense, ethical hacking, and digital forensics, often in collaboration with global tech firms. These programs are equipping the next generation of professionals with the skills needed to defend Pakistan’s digital ecosystem against increasingly sophisticated threats.",

        "As e-governance platforms expand — from online taxation to digital identity systems — Pakistan is prioritizing the security of sensitive citizen data. Government databases and services are now protected with state-of-the-art encryption, intrusion detection systems, and frequent penetration testing. These measures not only safeguard against cyber breaches but also ensure uninterrupted access to essential digital public services.",

        "Bug bounty programs are gaining momentum in Pakistan as companies invite ethical hackers to test their digital systems for vulnerabilities. By rewarding researchers who responsibly disclose flaws, organizations are strengthening their security at a fraction of the cost of traditional audits. This trend is creating new opportunities for local cybersecurity talent while improving overall trust in digital platforms.",

        "Pakistan is scaling up efforts to protect critical national infrastructure (CNI) from cyber threats. Industrial Control System (ICS) security is being deployed to shield power plants, water facilities, and transportation networks from cyber warfare. These protections are essential for maintaining national security, ensuring reliable service delivery, and preparing for the future of hybrid cyber-physical threats.",

        // Software Technology
        "Pakistan has become a global leader in freelancing and software outsourcing, with thousands of developers providing services to clients worldwide. From mobile app development and e-commerce platforms to enterprise software solutions, Pakistani talent is making a strong mark on the international IT industry. With government-backed training programs and global recognition, the country’s IT exports are expected to keep growing in 2025 and beyond.",

        "Homegrown SaaS (Software-as-a-Service) companies in Pakistan are solving unique local challenges with innovative digital solutions. Businesses now rely on locally built platforms for accounting, HR management, inventory tracking, and retail operations. These affordable and scalable solutions empower small and medium enterprises (SMEs) to digitize their operations, increase efficiency, and compete more effectively in both local and global markets.",

        "The gaming industry in Pakistan is thriving, with studios creating mobile and PC games that are gaining popularity in international markets. Developers are experimenting with augmented reality (AR), virtual reality (VR), and AI-powered gameplay to offer immersive experiences. By leveraging global publishing platforms and digital distribution, Pakistan’s gaming startups are establishing a strong presence in the multi-billion-dollar gaming economy.",

        "Pakistani developers are becoming active contributors to the global open-source community. From building libraries and frameworks to fixing bugs in widely used projects, their work is gaining international recognition. This collaborative culture not only builds technical expertise but also strengthens Pakistan’s reputation as a hub of world-class software talent.",

        "Large enterprises in Pakistan, including textiles, logistics, and manufacturing firms, are increasingly adopting Enterprise Resource Planning (ERP) solutions tailored to their needs. Locally developed ERP platforms integrate supply chain management, HR, finance, and analytics into a single system. These tools help businesses boost productivity, make data-driven decisions, and compete globally with greater efficiency.",

        // Communication Technology
        "Pakistan officially began rolling out 5G services in major cities, enabling ultra-fast internet speeds, low latency, and better connectivity. This milestone is powering smart city projects, autonomous technologies, and the Internet of Things (IoT). By 2025, Pakistan is positioning itself as a regional leader in next-generation mobile connectivity, fueling digital transformation across industries.",

        "The expansion of Pakistan’s national fiber-optic network is dramatically improving internet speeds and connectivity in underserved areas. This infrastructure upgrade is bringing digital services to rural communities, empowering schools, businesses, and healthcare providers with reliable access to high-speed internet. The expansion is a critical step in closing the digital divide and fostering inclusive economic growth.",

        "Satellite internet solutions are extending digital access to Pakistan’s most remote and mountainous regions. By partnering with global providers, Pakistan is ensuring that even communities without fiber infrastructure can benefit from high-speed internet. This breakthrough is helping remote schools, hospitals, and businesses connect to the digital economy, reducing isolation and opening new growth opportunities.",

        "The government has launched a secure national communication network for official and defense use. Equipped with advanced encryption and cybersecurity protocols, this closed network ensures uninterrupted and safe communication for sensitive government operations. It plays a critical role in protecting national interests and supporting digital sovereignty.",

        "Pakistan is developing regulations for internet-based communication platforms such as WhatsApp, Zoom, and other OTT (Over-The-Top) services. The framework addresses licensing, taxation, and security challenges while ensuring fair competition with telecom operators. These policies will shape the future of communication and digital services in the country.",

        // Machinery Technology
        "Pakistan’s agricultural sector is modernizing rapidly with advanced machinery. Locally manufactured tractors, harvesters, and irrigation systems are equipped with GPS and automation features, enabling farmers to practice precision agriculture. This shift reduces manual labor, cuts costs, and significantly boosts productivity, strengthening Pakistan’s agricultural output and global competitiveness.",

        "The textile industry — the backbone of Pakistan’s exports — is adopting automation at scale. Computerized looms, robotic sewing units, and digital printing machines are improving fabric quality, increasing production efficiency, and reducing waste. By modernizing manufacturing plants, Pakistan’s textile sector is becoming more competitive in global fashion and apparel markets.",

        "Pakistan’s infrastructure development projects are powered by modern construction machinery, including high-capacity excavators, tunnel boring machines, and automated batching plants. This technology is enhancing the quality and speed of road, dam, and housing projects. As investment in infrastructure grows, demand for advanced machinery is reshaping the construction industry.",

        "Local automotive assembly plants are expanding production capacity with state-of-the-art manufacturing technology. Multinational companies are partnering with Pakistan to produce affordable vehicles domestically, reducing reliance on imports and creating thousands of jobs. This industrial growth is strengthening the local supply chain and fueling economic development.",

        "Pakistan’s defense manufacturing sector is building advanced machinery for tanks, armored vehicles, and naval ships. Organizations like Heavy Industries Taxila (HIT) are incorporating robotics, precision engineering, and AI-driven systems into military production. This self-reliance not only boosts national security but also enhances Pakistan’s role in the global defense technology market.",

        // For America

        // AI Technology
        "The United States has launched the National AI Research Resource (NAIRR), a massive project that gives universities, startups, and innovators access to supercomputing power, large-scale datasets, and advanced AI tools. By democratizing AI beyond big tech corporations, this initiative is driving breakthroughs in healthcare, climate research, defense, and education. In 2025, NAIRR is fueling a new wave of innovation, making the U.S. a global hub for responsible and inclusive artificial intelligence development.",

        "Generative AI has moved from hype to real-world business integration across America. Enterprises are embedding AI into customer support, content creation, product design, and supply chain optimization. Platforms like Microsoft Copilot and Salesforce Einstein are transforming how employees work, boosting productivity and cutting costs. This wide-scale adoption is reshaping industries from marketing and healthcare to finance and logistics, proving that generative AI is now a core engine of U.S. economic growth.",

        "The rise of agentic AI is marking a new era for the U.S. technology sector. Unlike traditional chatbots, these advanced AI agents can plan, reason, and execute multi-step tasks autonomously. In 2025, American companies and labs are developing agentic AI systems that manage workflows, schedule operations, and even conduct market analysis without human intervention. This leap forward has the potential to transform workplaces, redefine automation, and unlock massive efficiency gains across the economy.",

        "The race for semiconductor dominance continues as the U.S. strengthens its chip manufacturing industry. Through the CHIPS and Science Act, billions are being invested into domestic fabrication plants to reduce reliance on foreign suppliers. With companies like NVIDIA, Intel, and AMD leading innovation in AI-specific chips, America is maintaining its competitive edge in powering AI applications. These advancements not only secure economic leadership but also play a crucial role in national security and global technological influence.",

        "AI regulation in America is advancing with frameworks that balance innovation and ethical responsibility. The White House, Congress, and industry leaders are shaping policies to address AI safety, algorithmic bias, and data privacy. By 2025, the U.S. is moving toward standardized rules that protect citizens while ensuring businesses can innovate freely. This approach is setting the stage for global AI governance, positioning America as both a technological leader and a guardian of responsible AI use.",

        // Cyber Technology
        "The U.S. National Institute of Standards and Technology (NIST) is leading the development of quantum-resistant cryptography to safeguard digital systems from future quantum computers. These next-generation encryption algorithms are being adopted by government agencies, banks, and enterprises to secure sensitive data for decades to come. By spearheading global standards, America is ensuring the long-term resilience of its cybersecurity infrastructure.",

        "AI-powered autonomous cyber defense is revolutionizing America’s security landscape. These systems detect, analyze, and neutralize threats at machine speed, preventing attacks before humans can react. In 2025, U.S. defense agencies, corporations, and financial institutions are adopting AI-driven solutions that minimize downtime, reduce breaches, and create a stronger national cybersecurity shield.",

        "The U.S. government has mandated Zero-Trust Architecture across all federal agencies. This security model removes the idea of a trusted internal network by requiring constant verification of every user, device, and connection. By enforcing this principle, America is drastically reducing attack surfaces and setting a benchmark for global cybersecurity best practices.",

        "Protecting critical infrastructure is now a top priority in U.S. cybersecurity strategy. Power grids, water systems, hospitals, and financial institutions are being shielded with advanced monitoring, AI-based threat detection, and backup recovery protocols. By strengthening resilience against state-sponsored and criminal cyberattacks, the U.S. is ensuring both national security and economic stability.",

        "The deployment of a unified cyber force in America has transformed national security operations. By combining the expertise of military cyber commands, intelligence agencies, and civilian institutions, the U.S. has created a cohesive defense mechanism. This integration ensures faster intelligence sharing, coordinated responses, and effective deterrence against global cyber adversaries.",

        // Software Technology
        "Cloud computing remains one of America’s most powerful technological exports. Companies like Amazon Web Services, Microsoft Azure, and Google Cloud continue to dominate the global market, providing advanced AI services, scalable infrastructure, and secure storage solutions. Hybrid and multi-cloud strategies are helping enterprises achieve flexibility, while innovations like serverless computing and edge AI are pushing boundaries. This leadership cements the U.S. as the backbone of worldwide digital transformation.",

        "Artificial Intelligence is deeply embedded in America’s software industry, reshaping healthcare, finance, education, and transportation. Giants like Google AI, IBM Watson, and OpenAI are pioneering breakthroughs in natural language processing, computer vision, and predictive analytics. By integrating AI into everyday applications, the U.S. is delivering smarter, faster, and more personalized user experiences, keeping its position at the forefront of global software innovation.",

        "Cybersecurity advancements are strengthening America’s software ecosystem. Firms such as CrowdStrike, Cisco, and Palo Alto Networks are deploying AI-driven threat detection, zero-trust security, and automated defense systems. In collaboration with government initiatives, these technologies are protecting sensitive data, financial institutions, and national infrastructure. The U.S. remains a global leader in building trust and resilience within the digital economy.",

        "Fintech is reshaping the financial industry across the United States. Companies like Stripe, PayPal, Square, and Coinbase are revolutionizing digital payments, blockchain adoption, and cryptocurrency platforms. AI-powered fraud detection, faster cross-border transactions, and inclusive banking tools are giving consumers more control and security. America’s fintech sector is setting global trends that define the future of money and digital finance.",

        "U.S. software development practices are setting the global standard for innovation. Agile frameworks, DevOps, microservices, and cloud-native development are accelerating project delivery and scalability. Emerging trends such as AI-assisted coding, open-source collaboration, and low-code platforms are reshaping how software is built. With Silicon Valley as a global innovation hub, America continues to shape the future of programming and digital transformation worldwide.",

        // Communication Technology
        "America’s communication technology has evolved into one of the most advanced infrastructures in the world. Telecom leaders like AT&T, Verizon, and Cisco drive global progress in high-speed internet, secure communication platforms, and enterprise solutions. These innovations not only support domestic growth but also establish the U.S. as a global benchmark for reliability, speed, and digital connectivity.",

        "The nationwide rollout of 5G networks is revolutionizing American industries and lifestyles. With lightning-fast internet speeds and ultra-low latency, 5G is powering smart cities, autonomous vehicles, remote healthcare, and next-generation entertainment. Telecom giants are expanding coverage across rural and urban areas, ensuring inclusive digital growth and keeping the U.S. ahead in global connectivity leadership.",

        "Satellite communication plays a critical role in America’s connectivity ecosystem. Projects like SpaceX Starlink and NASA’s space communication systems are providing internet access to remote and underserved regions worldwide. These networks are supporting disaster recovery, military communication, and scientific research, reinforcing the U.S. position as a global leader in space-based communication.",

        "The Internet of Things (IoT) is connecting billions of devices across America, transforming homes, businesses, and industries. From smart cities and intelligent transportation to connected healthcare and agriculture, IoT is driving efficiency and innovation. By integrating AI and cloud computing, the U.S. is creating a smarter, safer, and more connected digital society.",

        "The future of communication technology in America is being shaped by cutting-edge research in quantum networks, AI-driven systems, and 6G development. These innovations promise ultra-secure data transfer, real-time holographic communication, and advanced edge computing capabilities. By investing in next-generation technologies, the U.S. is ensuring long-term global leadership in communication advancements.",

        // Machinery Technology
        "Machinery technology in the U.S. has transformed industries such as aerospace, automotive, construction, and healthcare. From high-precision engineering to AI-driven manufacturing, American companies continue to push boundaries. This legacy of innovation has fueled economic growth and solidified the U.S. as a leader in global machinery production.",

        "Smart manufacturing powered by automation, robotics, and AI is driving America’s industrial revolution. Companies like General Electric, Caterpillar, and Tesla are using digital twins, predictive maintenance, and IoT-enabled machines to optimize production. These innovations reduce costs, minimize downtime, and increase output, ensuring America remains at the forefront of global manufacturing competitiveness.",

        "Agricultural machinery in the U.S. is setting new standards in precision farming. Advanced tractors, harvesters, and irrigation systems equipped with AI and GPS technology help farmers maximize yields while conserving resources. Companies like John Deere are integrating real-time analytics into machinery, supporting sustainable farming and boosting food production worldwide.",

        "Heavy construction machinery is powering America’s infrastructure growth. From highways and bridges to smart cities, advanced bulldozers, cranes, and excavators are enabling faster and safer project execution. With innovations in fuel efficiency, electrification, and operator safety, U.S.-made machinery continues to shape global infrastructure development.",

        "The future of machinery technology in the U.S. lies in sustainability and digital intelligence. Companies are creating electric-powered machines, autonomous construction vehicles, and renewable-energy-driven industrial equipment. By focusing on green engineering and smart automation, America is preparing its machinery sector for a future that balances innovation with environmental responsibility.",

        // For Japan

        // AI Technology
        "Japan is leading the global race in robotics and automation with next-generation AI systems that combine precision engineering and human collaboration. Collaborative robots (cobots) are working alongside factory workers, while AI-powered predictive systems minimize downtime in assembly lines. In 2025, Japanese companies are also using robotics in logistics, elderly care, and hospitality, creating a unique model of human-AI synergy. These breakthroughs are reinforcing Japan’s dominance in robotics and setting the stage for a new era of industrial innovation.",

        "Tokyo has emerged as a global hub for AI-driven healthcare solutions. Hospitals and research centers are using AI to detect cancer, heart disease, and neurological disorders earlier than ever before through advanced imaging analysis. Robotic-assisted surgeries deliver unmatched precision, while AI-powered drug discovery accelerates treatment development. By 2025, Japanese healthcare is combining cutting-edge technology with traditional patient-centered care, making Japan a leader in medical AI innovation.",

        "AI-powered smart cities are transforming daily life across Japan. From intelligent traffic management and AI-optimized energy grids to disaster prediction systems that safeguard citizens from earthquakes and floods, Japan is pioneering urban innovation. Digital assistants are helping citizens interact with public services, while AI-driven platforms enhance safety, sustainability, and convenience. These advancements make Japan a global model for smart and resilient cities.",

        "Japanese universities are pushing the boundaries of artificial intelligence research. Breakthroughs in deep learning, natural language processing, and computer vision are fueling global innovation. Partnerships with companies like Toyota, Sony, and SoftBank ensure that academic research translates into real-world applications. In 2025, Japan is also expanding AI education programs to nurture the next generation of talent, ensuring its role as a long-term leader in AI science and ethics.",

        "The Japanese government is strengthening the nation’s AI ecosystem by funding large-scale projects in manufacturing, healthcare, agriculture, and education. Through public-private collaboration, AI hubs are supporting startups, while established corporations are adopting smarter technologies to boost productivity. By aligning innovation with ethical standards and sustainability, Japan is building a globally competitive AI economy that benefits both industry and society.",

        // Cyber Technology
        "Japan is reinforcing its cybersecurity infrastructure to counter growing global threats. With sophisticated cyberattacks on the rise, the country is deploying AI-powered monitoring systems, strengthening data privacy laws, and enhancing cross-border cooperation. In 2025, Japan is recognized as one of Asia’s most secure digital environments, protecting critical infrastructure, financial systems, and government networks from cybercrime.",

        "Artificial Intelligence is now the backbone of Japan’s cyber defense strategy. AI systems continuously scan networks, detect anomalies, and neutralize attacks in real time, allowing companies and agencies to respond to threats faster than ever. This proactive approach is protecting Japan’s defense institutions, banks, and enterprises, positioning the nation as a global benchmark in AI-powered cybersecurity.",

        "Tokyo is investing heavily in developing a skilled cybersecurity workforce. Universities and training centers now offer advanced programs in ethical hacking, incident response, and digital forensics. In 2025, Japan is producing a new generation of cybersecurity experts, ensuring that the nation has the talent needed to secure its growing digital economy and defend against future threats.",

        "Japan’s government is building strong partnerships with private tech companies, global security firms, and startups to strengthen its cyber resilience. These collaborations are driving innovation in secure cloud platforms, AI-driven threat detection, and data protection tools. By extending support to small and medium businesses, Japan is ensuring that cybersecurity is inclusive and accessible across industries.",

        "Japan is playing a major role in shaping international cybersecurity standards and ethics. By working with organizations like the United Nations and global security alliances, Japan is setting policies for data privacy, cross-border security, and cybercrime prevention. This leadership is helping the world adopt safer and more ethical digital practices.",

        // Software Technology
        "AI is revolutionizing software development in Japan by automating coding, testing, and deployment. Companies are leveraging machine learning tools to build applications faster, reduce errors, and improve scalability. In 2025, Japanese developers are at the forefront of AI-assisted software engineering, driving innovation that enhances both domestic industries and global competitiveness.",

        "Tokyo’s startup ecosystem is booming with companies developing software solutions for fintech, healthcare, logistics, and education. These startups are combining Japanese precision with global design trends to create world-class products. As venture capital investment increases, Japan’s startups are becoming strong players in the international tech economy.",

        "Cloud computing adoption in Japan is reshaping industries at an unprecedented pace. Enterprises are moving toward hybrid and multi-cloud strategies to improve flexibility, security, and scalability. In 2025, sectors like finance, healthcare, and manufacturing are benefiting from cloud-powered transformation, making Japan’s tech industry more agile and globally connected.",

        "Open-source collaboration is gaining momentum in Japan as developers contribute to global projects in AI, blockchain, and cybersecurity. This culture of sharing is accelerating software innovation while boosting Japan’s reputation as a hub of world-class developers. The growing open-source movement is making Japanese tech more integrated with global advancements.",

        "The Japanese government is actively supporting digital innovation by offering tax incentives, research grants, and infrastructure support for software firms. These initiatives are fueling innovation in SaaS, mobile apps, and enterprise solutions. With this support, Japan’s software ecosystem is becoming stronger, more diverse, and better positioned to lead in the global digital economy.",

        // Communication Technology
        "Japan is at the forefront of 6G research, aiming to deliver ultra-fast, low-latency communication by 2030. Universities, telecom giants like NTT Docomo, and government agencies are collaborating on futuristic applications, including holographic communication and immersive virtual reality experiences. These innovations will shape the next generation of global connectivity.",

        "The rollout of 5G infrastructure across Japan is expanding rapidly, reaching both urban and rural areas. High-speed mobile internet is powering smart factories, autonomous vehicles, and next-generation healthcare services. By 2025, Japan’s widespread 5G adoption is laying the foundation for its transition to 6G technology.",

        "Japan is investing in satellite communication systems to ensure nationwide coverage and resilience during natural disasters. Advanced satellites are enabling high-speed internet access in remote and mountainous areas, bridging the digital divide and supporting national security. These investments also strengthen Japan’s influence in global space-based communication.",

        "AI integration is transforming Japan’s telecommunication services by enhancing customer experiences and network management. Telecom companies are deploying AI chatbots, predictive analytics, and automated systems to improve call quality, reduce downtime, and anticipate demand. This makes communication more efficient, personalized, and reliable.",

        "Japan is taking an active role in shaping global communication standards by participating in international committees and technology alliances. By setting benchmarks for security, data transfer, and interoperability, Japan is ensuring that future communication technologies remain secure, inclusive, and globally connected.",

        // Machinery Technology
        "Japan is revolutionizing machinery technology by integrating Artificial Intelligence and IoT into industrial equipment. Smart machines capable of predictive maintenance, self-diagnosis, and real-time optimization are boosting efficiency in factories. This digital transformation is reducing operational costs and increasing global demand for Japanese-made machinery.",

        "Robotics and advanced automation are transforming Japan’s manufacturing sector. From automotive to electronics, factories are deploying intelligent machines that increase output, improve quality, and reduce human error. By 2025, Japan’s leadership in industrial robotics continues to set international standards for efficiency and innovation.",

        "Sustainability is becoming a cornerstone of Japan’s machinery industry. Companies are designing energy-efficient equipment, electric-powered machines, and carbon-reducing technologies that align with the country’s carbon-neutral targets for 2050. These innovations are making Japan a leader in green industrial machinery.",

        "Japan’s tradition of precision engineering continues to thrive, with high-end machine tools and semiconductor fabrication equipment being exported worldwide. These advanced tools strengthen Japan’s role in industries such as aerospace, automotive, and electronics, maintaining its position as a trusted global supplier of quality machinery.",

        "Government-industry collaboration is boosting Japan’s machinery R&D efforts. Strategic investments in smart factories, sustainable production methods, and next-gen industrial equipment are keeping Japan competitive in the global market. By 2025, these partnerships are ensuring Japan’s continued leadership in industrial technology.",

        // For China

        // AI Technology
        "China continues to lead the world in Artificial Intelligence research and deployment. With thousands of AI-focused patents, state-funded labs, and university-industry partnerships, the country is pushing boundaries in deep learning, computer vision, and natural language processing. In 2025, AI is being applied across agriculture, defense, and smart manufacturing, making China a powerhouse in global AI innovation and shaping the future of intelligent automation.",

        "AI-powered healthcare is transforming China’s medical system. Hospitals are using AI to analyze CT scans, MRIs, and genetic data with remarkable accuracy, enabling earlier diagnosis of cancers, heart conditions, and infectious diseases. Smart healthcare platforms powered by AI also support telemedicine and personalized treatment plans. By combining big data with machine learning, China is improving patient outcomes and creating a more efficient, tech-driven healthcare ecosystem.",

        "China’s rapid urbanization is giving rise to some of the most advanced smart cities in the world. AI is at the core of these projects, powering intelligent traffic control, smart surveillance systems, renewable energy grids, and digital citizen services. In 2025, cities like Shenzhen and Shanghai are showcasing how AI-driven governance and infrastructure can create safer, greener, and more efficient urban living environments.",

        "AI in education is revolutionizing how students learn in China. Adaptive learning platforms personalize lessons based on a student’s pace and performance, while AI tutors provide instant feedback and support. Automated grading systems are reducing teachers’ workload, and big data analytics are helping schools design better curriculums. By 2025, AI is ensuring more equitable and efficient access to education for millions of students across China.",

        "Government policies are fueling China’s AI boom through funding, incentives, and nationwide adoption strategies. From defense and manufacturing to agriculture and healthcare, state-led initiatives ensure AI is integrated into every sector. In 2025, with strong regulatory frameworks and heavy investments, China’s AI industry is not only growing rapidly but also challenging global competitors for leadership in innovation.",

        // Cyber Technology
        "China has strengthened its cybersecurity regulations with strict national laws that govern data storage, cross-border information flows, and digital privacy. These policies aim to secure sensitive government, corporate, and personal data while consolidating state control over the digital landscape. In 2025, China’s regulatory model is influencing global debates on data sovereignty and cyber governance.",

        "AI-driven cyber defense is becoming a critical part of China’s security strategy. Advanced algorithms continuously monitor networks, detect anomalies, and block cyber intrusions in real time. Defense and technology companies are using these systems to secure national infrastructure and military networks. With these advancements, China is positioning itself as a global leader in AI-powered cybersecurity.",

        "China’s cybersecurity industry has grown into a multi-billion-dollar sector, with local companies offering services in threat detection, secure cloud computing, and enterprise security. In 2025, this booming industry is not only protecting China’s digital economy but also expanding into global markets, making Chinese firms important players in the international cybersecurity landscape.",

        "China’s advanced cyber capabilities continue to raise concerns worldwide. Reports of digital espionage, surveillance technologies, and state-linked hacking groups highlight the dual-use nature of China’s cyber infrastructure. In 2025, this global scrutiny underscores both the sophistication and the geopolitical implications of China’s cyber power.",

        "Public-private partnerships are becoming the backbone of China’s cyber resilience. Government agencies are collaborating with major tech firms such as Huawei and Alibaba Cloud to build stronger defenses against cyberattacks. By pooling resources and intelligence, China is improving its ability to counter both domestic threats and international cyber challenges.",

        // Software Technology
        "China is accelerating the development and adoption of homegrown operating systems like HarmonyOS and Kylin OS to reduce dependence on Western software. These platforms are being deployed across government, defense, and corporate systems to ensure digital sovereignty. In 2025, homegrown software is becoming a core pillar of China’s technological independence.",

        "Artificial Intelligence is deeply integrated into China’s software industry, powering consumer apps, enterprise platforms, and financial technologies. From smart assistants and AI-powered e-commerce to intelligent supply chain management, software in China is increasingly AI-driven. This shift is making Chinese applications highly competitive in global markets.",

        "China’s cloud computing sector is achieving record-breaking growth, led by giants like Alibaba Cloud, Tencent Cloud, and Huawei Cloud. Businesses across industries are adopting cloud services for scalability, cybersecurity, and data-driven decision-making. By 2025, China is second only to the U.S. in global cloud dominance, reshaping how digital infrastructure is deployed worldwide.",

        "Open-source innovation is gaining momentum in China as developers contribute to global projects in blockchain, artificial intelligence, and big data. Local companies are building communities that support faster and cheaper innovation. This collaborative culture is strengthening China’s reputation as a significant player in the open-source ecosystem.",

        "The Chinese government is investing heavily in next-generation software solutions. Funding for cybersecurity tools, industrial automation software, and national digital platforms is enabling local developers to innovate faster. These policies are ensuring that China’s software industry is not only competitive but also strategically aligned with its long-term digital ambitions.",

        // Communication Technology
        "China is rapidly expanding its 5G networks, extending coverage to rural villages, mountainous areas, and industrial hubs. By 2025, this expansion is enabling smart agriculture, remote healthcare, and digital education in underserved communities. With one of the largest 5G footprints globally, China is bridging the digital divide and enhancing national connectivity.",

        "Satellite internet projects, led by both government-backed agencies and private companies, are strengthening China’s role in global connectivity. Low-Earth orbit satellite constellations are providing broadband services across Asia and beyond, making China a competitor in the race for global satellite internet dominance.",

        "China is accelerating its 6G research with partnerships between telecom companies, universities, and state organizations. Early projects are exploring terabit-level speeds, ultra-low latency, and futuristic applications such as holographic communication. By 2025, China is positioning itself as one of the frontrunners in next-generation communication technology.",

        "AI-powered communication platforms are changing how Chinese businesses and consumers interact. From real-time multilingual translation to intelligent video conferencing tools, these platforms are enhancing collaboration, boosting productivity, and supporting cross-border business expansion. In 2025, China’s digital services are becoming increasingly competitive on a global scale.",

        "China is advancing secure quantum communication networks using Quantum Key Distribution (QKD) technology. These ultra-secure systems are already being deployed in government and financial sectors, ensuring data protection against even future quantum computing threats. This innovation makes China a leader in next-generation secure communication systems.",

        // Machinery Technology
        "China is boosting its manufacturing industry with AI-powered smart machinery. Intelligent systems capable of predictive maintenance, real-time monitoring, and quality control are reducing costs and increasing efficiency. In 2025, these advancements are helping China strengthen its position as the world’s largest manufacturing hub.",

        "The development of electric and autonomous construction machinery is gaining momentum in China. Self-driving excavators, loaders, and cranes are now being tested at construction sites, enhancing safety and productivity while cutting emissions. These technologies are transforming how infrastructure projects are executed across the country.",

        "Robotics and automation are revolutionizing China’s agricultural machinery sector. From autonomous tractors to robotic harvesters, these machines are improving yields, reducing labor shortages, and ensuring food security. In 2025, smart farming technologies are becoming essential to China’s agricultural modernization.",

        "Green manufacturing is a top priority in China’s machinery industry. Companies are producing eco-friendly equipment powered by renewable energy and optimized for energy efficiency. These innovations are reducing the carbon footprint of factories and aligning with China’s goal of achieving carbon neutrality by 2060.",

        "China is advancing high-end CNC (Computer Numerical Control) machinery that supports industries like aerospace, electronics, and automotive. These precision machines are improving manufacturing accuracy and reliability, strengthening China’s industrial competitiveness in global markets.",

        // For India
        // AI Technology
        "India is emerging as one of the fastest-growing AI innovation hubs in the world. With strong government initiatives like Digital India and Startup India, the country is accelerating research in natural language processing, computer vision, and machine learning. In 2025, AI applications are powering agriculture, education, and public services, making technology more accessible and inclusive. By combining a large talent pool with cutting-edge innovation, India is positioning itself as a global leader in responsible and scalable AI.",

        "AI-powered healthcare is transforming India’s medical landscape. Hospitals are using machine learning models to detect diseases like cancer, diabetes, and cardiovascular issues at early stages. Telemedicine platforms equipped with AI tools are connecting patients in rural villages to doctors in major cities. In 2025, AI is helping reduce the urban-rural healthcare gap, providing millions of people with faster, affordable, and more accurate treatment options.",

        "Smart farming in India is gaining momentum with the adoption of AI-driven solutions. From soil health monitoring and weather prediction to crop disease detection, AI platforms are empowering farmers with data-driven insights. Mobile apps in regional languages deliver real-time recommendations, reducing input costs and boosting yields. These innovations are helping ensure food security and driving sustainable growth in India’s agricultural sector.",

        "AI in education is bridging gaps and personalizing learning experiences for millions of students across India. Adaptive learning platforms tailor content to individual learning speeds, while AI tutors provide interactive support in multiple languages. Automated exam evaluation and predictive analytics are helping institutions improve learning outcomes. By 2025, AI is making education more inclusive, affordable, and effective across urban and rural communities.",

        "The Indian government is heavily investing in AI infrastructure through initiatives like the National AI Portal and AI research centers. These efforts are fostering collaboration between academia, startups, and global tech companies. By supporting AI development across industries such as healthcare, finance, and defense, India is building an ecosystem that drives innovation, economic growth, and digital inclusion.",

        // Cyber Technology
        "India is strengthening its cybersecurity ecosystem to protect against rising digital threats. With the expansion of e-governance, fintech, and digital commerce, the need for robust security frameworks has become critical. In 2025, India has introduced stronger data protection laws, secure payment systems, and government-led cybersecurity policies that safeguard both businesses and citizens in the digital economy.",

        "AI-driven cybersecurity tools are increasingly being deployed across Indian enterprises. These systems monitor networks in real time, detect anomalies, and prevent potential breaches. Banks, telecoms, and IT firms are adopting AI-powered solutions to secure sensitive data, minimize downtime, and boost customer trust. This wave of adoption is making India’s cybersecurity landscape more resilient and adaptive to emerging threats.",

        "The Indian government is setting up Cybersecurity Centers of Excellence in partnership with universities and industry leaders. These centers focus on training talent, researching advanced defense strategies, and promoting innovation in cyber resilience. By 2025, India is not only preparing skilled professionals but also becoming a regional leader in cybersecurity knowledge and innovation.",

        "Public-private partnerships are shaping India’s cyber defense strategy. Large IT companies such as Infosys, TCS, and Wipro are working with government agencies to build secure platforms, protect critical infrastructure, and share real-time threat intelligence. This collaborative approach is enhancing trust and strengthening the security backbone of the digital economy.",

        "India is playing an active role in shaping global cybersecurity policies through its participation in international coalitions. By contributing to discussions on data privacy, digital rights, and cybercrime prevention, India is ensuring its voice is heard on the world stage. This engagement positions India as a responsible global partner in building a safer digital future.",

        // Software Technology
        "India’s IT and software services industry remains one of the largest in the world, powered by companies like Infosys, Wipro, and TCS. These firms deliver software solutions, cloud services, and IT consulting to clients across the globe. In 2025, India continues to dominate outsourcing markets while expanding into AI, blockchain, and cybersecurity-driven software services.",

        "The startup ecosystem in India is thriving, with thousands of software startups addressing challenges in fintech, edtech, healthtech, and logistics. Supported by venture capital and government initiatives, these startups are building world-class platforms. In 2025, India has become one of the top three startup ecosystems globally, driving software innovation and digital entrepreneurship.",

        "India’s fintech revolution is reshaping how people transact, save, and invest. Platforms like UPI (Unified Payments Interface), Paytm, PhonePe, and Razorpay have made digital payments a daily reality for millions. AI-powered fraud detection and blockchain-based financial services are improving security and transparency. By 2025, India’s fintech software is setting global benchmarks for scale and inclusivity.",

        "Open-source contributions from Indian developers are growing rapidly. Communities across the country are actively contributing to projects in AI, cloud computing, and blockchain, building tools that benefit both local and global industries. This open-source culture is not only strengthening India’s developer ecosystem but also making it a vital part of the global software innovation movement.",

        "The Indian government is supporting digital transformation through policies and programs that boost software exports, innovation hubs, and R&D centers. By 2025, these initiatives are creating new opportunities for software professionals and helping Indian firms compete at the highest levels of the global market.",

        // Communication Technology
        "India is rapidly expanding its 5G networks, bringing high-speed internet to both metropolitan cities and rural regions. This rollout is enabling smart cities, autonomous vehicles, and telemedicine services across the country. In 2025, widespread 5G adoption is transforming how Indians live, work, and connect, while also fueling digital innovation across industries.",

        "Satellite communication is playing a growing role in India’s connectivity expansion. ISRO (Indian Space Research Organisation) and private players are deploying satellites to provide internet services in remote and underserved areas. These initiatives are bridging the digital divide and ensuring access to reliable connectivity for schools, healthcare facilities, and small businesses.",

        "India has made major progress in building a national fiber-optic network that connects towns, villages, and industries with high-speed internet. This infrastructure backbone is empowering digital education, e-commerce, and government services. By 2025, fiber expansion is accelerating India’s journey toward a more inclusive and connected digital society.",

        "Communication platforms powered by AI are reshaping customer engagement in India. Businesses are using AI chatbots, translation services, and smart call routing to deliver better user experiences in multiple regional languages. This trend is making technology more inclusive and strengthening India’s position as a leader in digital communication innovation.",

        "India is actively participating in global discussions about 6G development, quantum communication, and digital ethics. With its growing telecom sector and skilled workforce, India is contributing to the design of future communication standards. By 2025, the country is positioning itself as both a user and a shaper of next-generation connectivity.",

        // Machinery Technology
        "India’s manufacturing sector is evolving rapidly with the adoption of Industry 4.0 technologies. Smart factories equipped with IoT sensors, AI-driven robotics, and predictive maintenance systems are improving productivity and reducing costs. In 2025, India’s machinery industry is more competitive, sustainable, and globally integrated than ever before.",

        "The agricultural machinery market in India is expanding with the introduction of smart tractors, automated irrigation systems, and AI-powered harvesters. These machines are helping farmers improve efficiency, reduce manual labor, and increase crop yields. With government support for mechanization, India is modernizing its farming sector at scale.",

        "India’s automotive industry is undergoing a transformation with electric vehicles (EVs) and smart manufacturing. Domestic companies like Tata Motors and Mahindra, along with global automakers, are investing in EV production plants and automated assembly lines. By 2025, India is emerging as a key hub for electric mobility and advanced automotive machinery.",

        "The construction industry in India is deploying advanced machinery like tunnel boring machines, automated concrete mixers, and GPS-enabled cranes to accelerate infrastructure development. These technologies are reducing project timelines and ensuring higher safety standards in road, metro, and housing projects across the country.",

        "Government policies like Make in India are boosting domestic machinery production across defense, aerospace, and heavy industries. By encouraging R&D and supporting local manufacturers, India is strengthening its self-reliance while also increasing its footprint in global machinery exports.",
    ]
    let ar_images = [
        // For Pakistan

        // AI Down Here
        'https://tse1.mm.bing.net/th/id/OIP.Zs3v5SBhnvJBa4G-NSXXXwHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.9Ju6UX0VwAJJ10VQo6v7BAHaE7?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.lMC4tFkoJkLGyKoJB71NUQHaE8?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.BAQqrYwMJTN-JBLCKIc4ngHaHa?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.ILPQ23tIsO8D2MUkRf9L0AHaEK?pid=Api&P=0&h=220',
        // Cyber Down 
        'https://tse4.mm.bing.net/th/id/OIP.zcsMKTUmQQrFd1wSecISXQHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.FAdweuvVkCPhyzNk7VtGDgHaEI?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.cz7fJTSGxAXQlWiNEkDeggHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.3pUBfPNxPSSHI_XNkHZaGQHaFA?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.L2X8dWL69rOei45iZH4C2wHaEH?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.uBdCFUz1ibuDmtCEPHBmlQHaD6?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.GWhnvhJQKp4HNSwFcDvYAQHaEK?pid=Api&P=0&h=220',
        // Software Down Here
        'https://tse3.mm.bing.net/th/id/OIP.1Me5NdIPr1M3-S8_CVALYAHaDd?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.fX9_XFis7KtPOzbB-m0eBwHaD4?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.5HtJYDq5kBmIbRRdNiYL-wHaE8?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.K8XIg-7asKm-ewowRS5nFAHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.vAviMnAVvZHqsAE40MghfAHaD8?pid=Api&P=0&h=220',
        // Communication Here
        'https://tse2.mm.bing.net/th/id/OIP.8Z2vvtcPEBNx4R9DE59BwgHaEO?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.xgS7bW7w4u2HDm6sey5XnAHaE8?pid=Api&P=0&h=220',
        'https://up.yimg.com/ib/th/id/OIP.6SwpmKVIskWGeKB_FKDclAHaEF?pid=Api&rs=1&c=1&qlt=95&w=206&h=113',
        'Public/Cyber-Secuurity-Of-Pakistan.HPQGexhNv5XcFNf3O_xvygHaEo',
        'https://tse3.mm.bing.net/th/id/OIP.8Sm5En8x6p9eAc271fI7tQHaDJ?pid=Api&P=0&h=220',
        // Machinery Technology
        'https://tse2.mm.bing.net/th/id/OIP.5OfOYj9G7nL0Qh322DpEUQHaE7?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.tzp0AEmTJI5Eh3L-EWFXDQHaEJ?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.d3fTgvIOrTOyrVr224PcIQHaEJ?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.EJObziWEm7mCPDOluxBYugHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.DEUnrs_vR0YYUBUnyg6mywHaDY?pid=Api&P=0&h=220',

        // For America 

        // AI Down Here
        'https://tse4.mm.bing.net/th/id/OIP.inp21U-HROsJEWdeEqXGlAHaE8?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.yhLF9vfvaAZanJEzF9EXVgHaE7?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.GHZOFj0gTHEfXeu0RX03EgHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.WRYYkZ3sLs0aYh8W0OAVoAHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.HsdKH6ESpIPvBlfPvnCY7AHaEx?pid=Api&P=0&h=220',
        // Cyber Down Here
        'https://tse1.mm.bing.net/th/id/OIP.2k9tcHYH1tYqTwD0qUYjPgHaE0?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.McU9xgDfRZlXph0-Y3ePWwHaE8?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.jpEPWXWK0bpDCVyaKs-J1AHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.ThBwahgO7fhMiEZ2P1hdtQHaEJ?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.oHS3xeOJ-IwsLHL1clj_0wHaE6?pid=Api&P=0&h=220',
        // Software Down Here
        'https://tse2.mm.bing.net/th/id/OIP.BNED1HN0QQbq1v2mau3RUQHaDt?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.eusCqXUpi099pgND8YehzQHaED?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.euo2QwyYyeVit_XrwPrBdwHaEB?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.UyeLzAUoUXJNGsLYuasOxgHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.O9v9AREl5QJgkkRQIVc53wHaEo?pid=Api&P=0&h=220',
        // Communication Here
        'https://tse2.mm.bing.net/th/id/OIP.UJ43zOMNb4fg0NwqWt2cQAHaHa?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.s--S0OOfDRklxaiB8SMtMgHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.HYJl7PqDOWaksRQsh_tyFwHaEa?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.tX21LS_U9TAT6dClchdC_AHaDt?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.PjAFT7iv11vATrljIoVoUQHaD6?pid=Api&P=0&h=220',
        // Machinery Technology
        'https://tse4.mm.bing.net/th/id/OIP.G6n_FFVrUj3utbdWBwo61gHaDt?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.X-4QePt3upLGIddutU8AVQHaD6?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.Bc-0XefIbXGwjnEpO0govwHaEO?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.zAGCHDb9ow6rZp6MhuatLwHaEJ?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.e9XXdoB09ha30vdT4J4QUwHaEK?pid=Api&P=0&h=220',

        // For Japan

        // For AI
        'https://tse2.mm.bing.net/th/id/OIP.fkCF1PIhEU7NILTg-SGxOwHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.4uLGOMDW4ZUC1ipyUgY54AHaHa?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.JutJF_5kDCt3XewOql-NPwHaEO?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.MvEZGnPDGZs0p9Niob7nkwHaEH?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.h135GV1os5Jr2jVUbUtBUwHaEK?pid=Api&P=0&h=220',

        // For Cyber
        'https://tse2.mm.bing.net/th/id/OIP.iDWMN7QXeIoCknFQyNY9iQHaD4?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.VdNkNqTk9e9bm84X56V9UAHaDL?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.srDoiI9_P7J5jTP5eYFouAHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.kBNf_JzM1l__JyaTTISghgHaD4?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.473rvPPmdr-5DoH72Y_tvgHaEB?pid=Api&P=0&h=220',

        // For Software
        'https://tse2.mm.bing.net/th/id/OIP.FP9BOluVLhGcsfx2zGE05AHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.pclVEkwIhT3dSnowyOsKSgHaD4?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.aii8XHhq1BY2jUIsP38oLgHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.PLCyl9p76BNT5zavx6NpUgAAAA?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.4R32f7xkwsJC4Sd98irjTAHaEK?pid=Api&P=0&h=220',
        // For Communication

        'https://tse2.mm.bing.net/th/id/OIP.5UWcQKOdxb840aUcmILQDgHaEe?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.-lCPxbbo3ss71IPU2atfewHaEn?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.VRv3T7DWBngj9InNpmnIjAHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.CjOBvHRpCUvgzb5fVnqVxgHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.eDvkPisGBXdQULhBWy6K9wHaEU?pid=Api&P=0&h=220',

        //  For Machinery

        'https://tse3.mm.bing.net/th/id/OIP.FFgliRBQe2eT4y7hAH5qqQHaEb?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.kyywInjHurzDH-L7GeJC3gHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.wfdMYwh_HTcdzg6ayFrhvAHaFn?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.4ZoNSQBlWjg47C1qMWkmAwHaE8?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.xMb1m0XNeKpaK26L7y_nWAHaEJ?pid=Api&P=0&h=220',

        // For China

        // For AI
        'https://tse2.mm.bing.net/th/id/OIP.Sxej1MrSuub8rN8VAGB9hgHaEJ?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.qXiwRv8xIJcGGzTkfp2DngHaEG?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.Z6kRI6yM6CQBDmIejj09kwHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.Snz8mDF2nL9jgebjLWxeFAHaEY?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.VGmOsgUaL-AyGcBE9mYMXgHaEY?pid=Api&P=0&h=220',
        // For Cyber
        'https://tse4.mm.bing.net/th/id/OIP.eEQmpI5t2iqcOQ2lcSyQvAHaEK?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.xK4n_lnbUgWvHocZC5XGEwHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.hL1KmJXdGgWEpTvDlX7GVQHaEO?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.GISWL497V9m3zbhHN7a_ugHaDt?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.YPOisyV537u7t56S9HjbawHaEK?pid=Api&P=0&h=220',
        // For Software
        'https://tse3.mm.bing.net/th/id/OIP.pv4IlY0dWtBdTzZsPxCkRAHaEc?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.rRMYUTjXqtkYJM2jBq2GEgHaEO?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.C_-gcFulQFhnE2uO4aHYiQAAAA?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.cOPynZueYRAcPSjq9Xg4HgHaEM?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.FWodyI9lKLV1RKWO37eRxQHaEK?pid=Api&P=0&h=220',
        // For Communication
        'https://tse4.mm.bing.net/th/id/OIP.CsMBBTF0a0p8h5ner90N8AHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.zcOyyLDa-zworLGawFrNVwHaCy?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.6iZFrazozUuxyiiBbYwevAHaEx?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.GlZtt3gLn8enwixSo9lx4AHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.I2yXqOCryYQJ7_yVudIrcwHaEO?pid=Api&P=0&h=220',
        // For Machinery
        'https://tse1.mm.bing.net/th/id/OIP.0sHJMULJZRUSBMhET_cwAAHaEJ?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.9gicI8WDf63HBAYpDgZcuQHaE7?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.-J7Zk6QOirJjgSd7x0zJogHaEK?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.Pq69YXw09cAdvfGqvI3XDwHaDZ?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.qkVITqJvUvXMVw6NcLcqvwHaHa?pid=Api&P=0&h=220',

        // For India

        // For AI
        'https://tse1.mm.bing.net/th/id/OIP.Vw9BKJmad3E17QNReL7sAAHaEM?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.yoEdI_4lF6IJC-cp5lenEgHaEH?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.3gnhkJLIsW8yaWQKQk52cAHaEK?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.85aU0AQbCLYzdfMRmxDilAHaEK?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.evRHV9muuWnjcmk-LEKYlQHaEJ?pid=Api&P=0&h=220',
        // For Cyber
        'https://tse4.mm.bing.net/th/id/OIP.1FQ2E9vLdFbTcc1K3TeJgAHaD2?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.tzAUuR7zphyB-qFqxLe5nwHaD4?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.ikTy1LJvzj12I8ZsNIQnugHaD4?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.cqG06_ZLkPXfOThh8-B0QAHaEo?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.9uuZMD12EFdCwj3ET600HwHaDT?pid=Api&P=0&h=220',
        // For Software
        'https://tse4.mm.bing.net/th/id/OIP.l_tS6zlf_BrZSoirRxvlVwHaE8?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.Ff60H9xN9F3y5NDc0z4dVAHaEd?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.ybbcuPvPQwScjr2y5had1gHaEK?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.B62n6G-9nievbKqqz3PB5AHaDt?pid=Api&P=0&h=220',
        'https://tse4.mm.bing.net/th/id/OIP.F5sf0DFr5zKFMLV4ypkYygHaFL?pid=Api&P=0&h=220',
        // For Communication
        'https://tse1.mm.bing.net/th/id/OIP.w-3Fzre1Mf2B7Y-nd_i_DwHaEK?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.EJQ4o-bzH36IvdGkUdXd3wHaDt?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.RWeRn0ns6owRXMP0tsmPhgHaEK?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.rmIH3asuUEFEbYQmIcLSbQHaE8?pid=Api&P=0&h=220',
        'https://tse3.mm.bing.net/th/id/OIP.ooQcGPr0FP2IPErE0lASZwHaD4?pid=Api&P=0&h=220',
        // For Machinery
        'https://tse4.mm.bing.net/th/id/OIP.v3U2Akgaj2ddKgy0aTOe3gHaEK?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.JtoAmzFm6H_7AMPIkD-jSwHaFj?pid=Api&P=0&h=220',
        'https://tse2.mm.bing.net/th/id/OIP.hid3_pgpqoVDJi5kcyrmvAHaEj?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.BLuoz4ReCcLK6B3mSFwuCwHaEe?pid=Api&P=0&h=220',
        'https://tse1.mm.bing.net/th/id/OIP.2cOD8QxB1sYcJ6E2u5NbtAHaEO?pid=Api&P=0&h=220',
    ]
    let ar_types = [
        // For Pakistan

        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',

        // For America

        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',

        // For Japan

        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',

        // For China

        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',

        // For India

        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'AI Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Cyber Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Software Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Communication Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',
        'Machinery Technology',

    ]
    let ar_countries = [
        // Minimum 25

        // Pakistan Here (27)
        'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan', 'Pakistan',
        // America Here (25)
        'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America', 'America',
        // For Japan (25)
        'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan', 'Japan',
        // For China (25)
        'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China', 'China',
        // For India (25)
        'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India', 'India',
    ]
    function ArticlesGenerator() {
        let i = 0
        while (i < ar_heads.length) {
            let article = document.createElement('article')
            article.className = 'articles'
            // article.title = ar_heads[i]
            article.id = `article-${i + 1}`

            let ar_head = document.createElement('h2')
            ar_head.className = 'ar-head'
            ar_head.innerText = ar_heads[i]
            ar_head.id = `ar-head-${i + 1}`

            let ar_sub_head = document.createElement('h3')
            ar_sub_head.className = 'ar-sub-head'
            ar_sub_head.id = `ar-sub-head-${i + 1}`
            ar_sub_head.innerText = ar_sub_heads[i]

            let ar_desc = document.createElement('div')
            ar_desc.id = `description-${i + 1}`
            ar_desc.className = 'description'

            let ar_desc_txt = document.createElement('div')
            ar_desc_txt.className = 'txt'
            ar_desc_txt.id = `txt-${i + 1}`
            ar_desc_txt.innerText = ar_descriptions[i]

            let ar_img = document.createElement('img')
            ar_img.className = 'img'
            ar_img.id = `img-${i + 1}`
            ar_img.src = ar_images[i]

            let ar_type = document.createElement('div')
            ar_type.innerText = ar_types[i]

            let ar_country = document.createElement('div')
            ar_country.innerText = ar_countries[i]
            ar_country.className = 'country'


            ar_type.style.display = 'none'
            ar_type.title = 'Type'

            ar_country.title = `${ar_country.textContent}`

            article.title = `${ar_head.textContent} In ${ar_country.textContent}`

            ar_desc.appendChild(ar_desc_txt)
            ar_img.alt = `${ar_sub_head.textContent.replace('.', '').trim()} in ${ar_country.textContent.replace('.', '').trim()}`
            ar_desc.appendChild(ar_img)

            article.appendChild(ar_head)
            article.appendChild(ar_sub_head)
            article.appendChild(ar_country)

            article.appendChild(ar_desc)

            article.appendChild(ar_type)

            container.append(article)
            // container.append(document.createElement('hr'))
            i += 1
        }
    }
    function SchemaGenerator() {
        let head = document.querySelector("head");

        for (let i = 0; i < ar_heads.length; i++) {
            // Prepare safe values
            let headline = ar_heads[i];
            let description = ar_descriptions[i].substring(0, 250); // keep short
            let image = ar_images[i] || "https://yourdomain.com/default-image.jpg";
            let country = ar_countries[i];
            let type = ar_types[i];

            // Generate URL-friendly slug
            let slug = headline.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

            // JSON-LD schema object
            let schemaData = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": headline + " in " + country,
                "description": description,
                "image": image,
                "author": {
                    "@type": "Organization",
                    "name": "TechnoPedia"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "TechnoPedia",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://yourdomain.com/logo.png"
                    }
                },
                "datePublished": new Date().toISOString().split("T")[0],
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://yourdomain.com/articles/${slug}`
                }
            };

            // Create <script> tag
            let script = document.createElement("script");
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(schemaData, null, 2);

            // Append schema into <head>
            head.appendChild(script);
        }
    }

    // Run after articles are generated
    ArticlesGenerator();
    SchemaGenerator();


    technology_selector.addEventListener('change', filterArticles)
    country_selector.addEventListener('change', filterArticles)

    function filterArticles() {
        let articles = document.querySelectorAll('.articles')
        articles.forEach(art => {
            art.classList.remove('Not-Selected')
        })

        let selected_tech_value = technology_selector.value
        let selected_country_value = country_selector.value

        articles.forEach(article => {
            let article_tech_value = article.lastElementChild.textContent
            let article_country_value = article.querySelector('.country').textContent

            // Check both filters together
            let matchesTech = !selected_tech_value || article_tech_value === selected_tech_value
            let matchesCountry = !selected_country_value || article_country_value === selected_country_value
            if (matchesTech && matchesCountry) {
                article.classList.remove('Not-Selected')
            } else {
                article.classList.add('Not-Selected')
            }
        })
    }
} catch (error) {
    print('Error Type:-', error.type)
    print('Error Message:-', error.message)
}
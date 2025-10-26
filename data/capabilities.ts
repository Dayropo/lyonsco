export const capabilities: Record<string, any> = {
  "injection-molding": {
    title: "Injection Molding",
    description: "From rapid prototyping to high-volume production with P3 technology",
    heroImage: "/images/capabilities/injection-molding.webp",
    overview: {
      intro:
        "Our injection molding services span from prototype tryouts through production quantities. Whether a project is a true functional prototype, short run injection molding, or a high volume multiple cavity production mold, we deliver the speed of a prototype at the quality of production.",
      details:
        "We offer a complete range of injection molding capabilities including standard injection molding, insert molding, two-shot molding, cleanroom molding, and micro molding. Our injection molding machines range from 12 ton to 650 ton clamping forces with shot sizes from 0.33 to 32 ounces. All aspects of tool construction are controlled by our central management staff and program management team, ensuring on-time delivery through every step of tool fabrication.",
    },
    benefits: [
      {
        icon: "zap",
        title: "P3 Rapid Molding",
        description: "Production prototyping delivers prototype speed at production quality",
      },
      {
        icon: "shield-check",
        title: "Quality Certified",
        description: "ISO 9001:2008, TS16949:2009, and ISO 13485:2003 registered",
      },
      {
        icon: "dollar-sign",
        title: "Lower Development Costs",
        description: "Same tool for prototype and initial production reduces overall costs",
      },
      {
        icon: "wrench",
        title: "Scientific Molding",
        description: "Process engineers utilize scientific molding techniques for robust processes",
      },
    ],
    partnerCompanies: [
      {
        id: "pti",
        name: "PTI (Plastic Technologies Inc.)",
        logo: "/images/companies/pti-logo.webp",
        href: "/companies/pti",
      },
    ],
    technicalSpecs: [
      {
        icon: "ruler",
        label: "Clamping Force",
        value: "12-650 Tons",
        description: "Wide range of press sizes for various part requirements",
      },
      {
        icon: "box",
        label: "Shot Size",
        value: "0.33-32 oz",
        description: "From micro molding to large component capabilities",
      },
      {
        icon: "layers",
        label: "Processes",
        value: "6+ Types",
        description: "Standard, insert, two-shot, cleanroom, micro, and overmolding",
      },
      {
        icon: "clock",
        label: "P3 Advantage",
        value: "Faster TTM",
        description: "Same tool for prototype and production reduces time to market",
      },
    ],
    relatedCapabilities: [
      {
        title: "Metal Stamping",
        href: "/capabilities/metal-stamping",
        description: "Precision metal stamping and forming",
      },
      {
        title: "CNC Machining",
        href: "/capabilities/cnc-machining",
        description: "Precision machining for prototypes and production",
      },
      {
        title: "Screw Machining",
        href: "/capabilities/screw-machining",
        description: "High-precision screw machining capabilities",
      },
    ],
  },
  "metal-stamping": {
    title: "Metal Stamping",
    description: "Precision metal stamping from prototype to high-volume production",
    heroImage: "/images/capabilities/metal-stamping.webp",
    overview: {
      intro:
        "Our metal stamping capabilities span from precision prototype stampings to high-volume progressive die operations. We specialize in high accuracy pieces of any complexity, working to tolerances of ±0.0005 in., with expertise in micro stamping, multislide, and deep draw processes.",
      details:
        "We work with a wide variety of metals including aluminum, stainless steel, brass, copper, spring steel, and exotic alloys like Inconel® and titanium. Our processes include coining, compound or progressive stamping, fine blanking, and open tooling. With ISO 9001:2008 certification and comprehensive design, assembly, and packaging services, we deliver high-quality solutions at every step.",
    },
    benefits: [
      {
        icon: "stamp",
        title: "Micro Stamping",
        description: "Thin gage metal as thin as 0.001 in. for precision components",
      },
      {
        icon: "shield-check",
        title: "ISO 9001 Certified",
        description: "Quality assurance throughout all manufacturing processes",
      },
      {
        icon: "dollar-sign",
        title: "Cost Containment",
        description: "Efficient processes minimize material waste and special handling",
      },
      {
        icon: "wrench",
        title: "Tool Design Expertise",
        description: "In-house tool design and manufacturing for optimal results",
      },
    ],
    partnerCompanies: [
      {
        id: "cgr",
        name: "CGR Technologies",
        logo: "/images/companies/cgr-logo.webp",
        href: "/companies/cgr",
      },
    ],
    technicalSpecs: [
      {
        icon: "ruler",
        label: "Tolerance",
        value: '±0.0002"',
        description: "Ultra-precision for critical components",
      },
      {
        icon: "box",
        label: "Material Range",
        value: '0.001-0.125"',
        description: "Thin gage to standard thickness capabilities",
      },
      {
        icon: "layers",
        label: "Processes",
        value: "5+ Types",
        description: "Progressive, multislide, deep draw, prototype, and fine blanking",
      },
      {
        icon: "clock",
        label: "Materials",
        value: "10+ Metals",
        description: "Common to exotic metals and alloys",
      },
    ],
    relatedCapabilities: [
      {
        title: "Injection Molding",
        href: "/capabilities/injection-molding",
        description: "Precision plastic injection molding services",
      },
      {
        title: "Screw Machining",
        href: "/capabilities/screw-machining",
        description: "High-precision screw machining capabilities",
      },
      {
        title: "CNC Machining",
        href: "/capabilities/cnc-machining",
        description: "Precision machining for prototypes and production",
      },
    ],
  },
  "cnc-machining": {
    title: "CNC Machining",
    description: "Precision CNC machining for functional prototypes and production components",
    heroImage: "/images/capabilities/cnc-machining.webp",
    overview: {
      intro:
        "Our CNC machining capabilities deliver functional prototypes and production components in as little as three days. Working directly from the designer's database, our craftsmen and equipment produce high-quality, accurate components to meet your most critical needs across industries from transportation to electronics.",
      details:
        "Our 3-axis machines feature live tooling to efficiently produce parts of any complexity, with a work envelope of 45 in. x 25 in. x 20 in. We supply parts complete according to customer specifications, from material furnishing through CNC turning, milling, grinding, honing, heat treating, plating, sub-assembly, and shipping. We set up control dimensions that are 100% inspected, with all dimensions of .001 or less tolerances receiving 100% inspection.",
    },
    benefits: [
      {
        icon: "zap",
        title: "Fast Turnaround",
        description: "Machined parts delivered in as little as three days",
      },
      {
        icon: "shield-check",
        title: "100% Inspection",
        description: "Control dimensions and tight tolerances fully inspected",
      },
      {
        icon: "dollar-sign",
        title: "Competitive Pricing",
        description: "Extremely competitive pricing with real-time design flexibility",
      },
      {
        icon: "wrench",
        title: "Complete Solutions",
        description: "From raw material to finished assembly and shipping",
      },
    ],
    partnerCompanies: [
      {
        id: "cgr",
        name: "CGR Technologies",
        logo: "/images/companies/cgr-logo.webp",
        href: "/companies/cgr",
      },
      {
        id: "pardev",
        name: "Paradigm Development Group Inc.",
        logo: "/images/companies/pardev-logo.webp",
        href: "/companies/pardev",
      },
    ],
    technicalSpecs: [
      {
        icon: "ruler",
        label: "Work Envelope",
        value: '45×25×20"',
        description: "Large capacity for various part sizes",
      },
      {
        icon: "box",
        label: "Tolerance",
        value: '±0.001"',
        description: "Precision machining with 100% inspection",
      },
      {
        icon: "layers",
        label: "Materials",
        value: "15+ Types",
        description: "Metals, plastics, ceramics, and exotic alloys",
      },
      {
        icon: "clock",
        label: "Lead Time",
        value: "3+ Days",
        description: "Fast turnaround for prototypes and production",
      },
    ],
    relatedCapabilities: [
      {
        title: "Screw Machining",
        href: "/capabilities/screw-machining",
        description: "High-precision screw machining capabilities",
      },
      {
        title: "Metal Stamping",
        href: "/capabilities/metal-stamping",
        description: "Precision metal stamping and forming",
      },
      {
        title: "Injection Molding",
        href: "/capabilities/injection-molding",
        description: "Precision plastic injection molding services",
      },
    ],
  },
  stereolithography: {
    title: "Stereolithography (SLA)",
    description: "Rapid prototyping with high accuracy 3D printed models in 1-2 days",
    heroImage: "/images/capabilities/stereolithography.webp",
    overview: {
      intro:
        "Stereolithography (SLA) is a rapid-prototyping process that produces physical, three-dimensional objects from 3D CAD files. Our SLA machines use computer-controlled lasers to cure photosensitive resin layer by layer, creating highly accurate parts with exceptional detail.",
      details:
        "We utilize state-of-the-art epoxy resins that produce the most accurate parts available in rapid prototyping. Our SLA process delivers models within 1-2 working days with accuracy of ±0.001 to 0.002 in/in. We offer rigid, flexible, and clear model options to meet various application requirements, from aesthetic models to functional prototypes and master patterns for secondary processes.",
    },
    benefits: [
      {
        icon: "zap",
        title: "Ultra-Fast Delivery",
        description: "Receive models within 1-2 working days",
      },
      {
        icon: "shield-check",
        title: "High Accuracy",
        description: "±0.001 to 0.002 in/in precision for detailed parts",
      },
      {
        icon: "dollar-sign",
        title: "Cost Effective",
        description: "Inexpensive rapid prototyping solution",
      },
      {
        icon: "wrench",
        title: "Material Options",
        description: "Rigid, flexible, and clear resin models available",
      },
    ],
    partnerCompanies: [
      {
        id: "pardev",
        name: "Paradigm Development Group Inc.",
        logo: "/images/companies/pardev-logo.webp",
        href: "/companies/pardev",
      },
    ],
    technicalSpecs: [
      {
        icon: "ruler",
        label: "Accuracy",
        value: '±0.001-0.002"',
        description: "High precision for detailed parts and features",
      },
      {
        icon: "box",
        label: "Material Types",
        value: "3 Options",
        description: "Rigid, flexible, and clear epoxy resins",
      },
      {
        icon: "layers",
        label: "Process",
        value: "Layer by Layer",
        description: "Laser-cured photosensitive resin",
      },
      {
        icon: "clock",
        label: "Lead Time",
        value: "1-2 Days",
        description: "Rapid turnaround for prototypes",
      },
    ],
    relatedCapabilities: [
      {
        title: "CNC Machining",
        href: "/capabilities/cnc-machining",
        description: "Precision machining for prototypes and production",
      },
      {
        title: "Urethane Casting",
        href: "/capabilities/urethane-silicone-casting",
        description: "Low-volume production and prototyping",
      },
      {
        title: "Injection Molding",
        href: "/capabilities/injection-molding",
        description: "Precision plastic injection molding services",
      },
    ],
  },
  // Add other capabilities here...
}

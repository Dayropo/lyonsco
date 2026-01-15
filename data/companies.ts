/**
 * Company data for the four manufacturing partners
 */

import type { Company } from "@/types"

export const companies: Company[] = [
  {
    id: "pardev",
    slug: "pardev",
    name: "Paradigm Development Group",
    tagline: "Early-Stage Prototyping & Concept Models",
    description:
      "Paradigm Development Group (Pardev) specializes in rapid prototyping and concept development, helping you bring ideas to life quickly. From initial concept models to functional prototypes, they provide the foundation for successful product development",
    about:
      "Paradigm Development Group (Pardev) provides comprehensive early-stage product development and prototyping services designed to accelerate innovation. Specializing in rapid prototyping, 3D printing, and concept model fabrication, Pardev transforms ideas into functional, test-ready components with speed and precision. The company’s in-house engineering, model-making, and machining capabilities allow seamless support from concept through low-volume production. By combining technical expertise with hands-on collaboration, Pardev helps customers reduce development time, refine designs, and move confidently toward full-scale manufacturing.",
    logo: "/images/companies/pardev-logo.webp",
    heroImage: "/images/companies/pardev-hero.webp",
    specialties: [
      "Rapid Prototyping",
      "3D Printing (FDM, SLA, SLS)",
      "CNC Machining for Prototypes",
      "Urethane Castings",
    ],
    capabilities: ["additive-manufacturing", "cnc-prototyping"],
    industries: ["medical", "aerospace", "automotive", "defense", "electronics"],
    certifications: [
      {
        id: "iso-9001",
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "shield-check",
        issuedBy: "ISO",
      },
    ],
    equipment: [
      {
        id: "fdm-printers",
        name: "FDM 3D Printers",
        type: "Additive Manufacturing",
        capabilities: ["Rapid prototyping", "Functional testing", "Design validation"],
        specifications: {
          "Build Volume": "300 x 300 x 400mm",
          "Layer Resolution": "50-400 microns",
          Materials: "ABS, PLA, PETG, Nylon, TPU",
        },
      },
      {
        id: "sla-printers",
        name: "SLA 3D Printers",
        type: "Additive Manufacturing",
        capabilities: ["High-detail prototypes", "Master patterns", "Concept models"],
        specifications: {
          "Build Volume": "145 x 145 x 175mm",
          "Layer Resolution": "25-100 microns",
          Materials: "Standard, Tough, Flexible, Castable Resins",
        },
      },
      {
        id: "cnc-mills",
        name: "CNC Milling Centers",
        type: "Subtractive Manufacturing",
        capabilities: ["Precision prototypes", "Functional parts", "Tooling"],
        specifications: {
          "Work Envelope": "500 x 400 x 300mm",
          Tolerance: '±0.005"',
          Materials: "Aluminum, Steel, Plastics, Composites",
        },
      },
    ],
    volumeRange: {
      min: 1,
      max: 100,
      optimal: {
        min: 1,
        max: 25,
      },
      unit: "pieces",
    },
    leadTime: {
      prototype: "3-5 days",
      lowVolume: "1-2 weeks",
      highVolume: "N/A - Refer to PTI",
    },
    materials: [
      "Engineering Plastics",
      "Aluminum",
      "Steel",
      "Composites",
      "3D Printing Resins",
      "Nylon",
    ],
    processes: ["3D Printing", "CNC Machining", "Finishing", "Assembly"],
    caseStudies: [],
    contactInfo: {
      email: "info@pardev.com",
      phone: "(847) 742-7714",
      address: "123 Innovation Drive, Chicago, IL 60601",
    },
    location: {
      // city: "Chicago",
      // state: "IL",
      country: "USA Based",
    },
    established: 1995,
  },
  {
    id: "pti",
    slug: "pti",
    name: "PTI Engineered Plastics",
    tagline: "Prototype & Low-to-Mid Volume Plastic Injection Molding",
    description:
      "PTI delivers precision plastic injection molding for low to medium volume production runs. With state-of-the-art equipment and decades of experience, they transform your designs into high-quality plastic components.",
    about:
      "PTI Engineered Plastics, located in Macomb, Michigan, is a leading full-service injection molding and tooling company specializing in custom plastic components for the medical, defense, automotive, and industrial markets. With in-house design, engineering, and tool-building capabilities, PTI provides complete product development support from prototype through production. The company offers precision injection molding—including cleanroom manufacturing, insert molding, and rapid prototyping—along with advanced assembly, decorating, and finishing services. As an ISO 13485 and ISO 9001 certified, FDA-registered facility, PTI is recognized for its focus on quality, innovation, and speed-to-market for complex, highly regulated applications.",
    logo: "/images/companies/pti-logo.webp",
    heroImage: "/images/companies/pti-hero.webp",
    specialties: [
      "Prototype Injection Molding",
      "Low Volume Manufacturing",
      "High Volume Manufacturing",
      "Contract Manufacturing",
      "Clean Room Molding and Assembly",
      "Part Decorating",
    ],
    capabilities: [
      "injection-molding",
      "tool-design",
      "cleanroom-production",
      "value-added-assembly",
    ],
    industries: ["medical", "aerospace", "automotive", "defense", "electronics"],
    certifications: [
      {
        id: "iso-9001",
        name: "ISO 9001",
        description: "Quality Management System",
        icon: "shield-check",
        issuedBy: "ISO",
      },
      {
        id: "iso-13485",
        name: "ISO 13485:2016",
        description: "Medical Device Quality Management",
        icon: "shield-check",
        issuedBy: "ISO",
      },
      {
        id: "ac-8160",
        name: "AC 8160",
        description: "MedAccred",
        icon: "award",
        issuedBy: "PRI",
      },
    ],
    equipment: [
      {
        id: "injection-molding-machines",
        name: "60 Injection Molding Machines",
        type: "Plastic Injection Molding",
        capabilities: [
          "High Temperature Molding",
          "Insert Molding",
          "Over Molding",
          "ISO Class 8 Cleanroom for Molding & Assembly",
        ],
        specifications: {
          "Tonnage Range": "35-300 tons",
          "Shot Size": "0.09 to 25.56 oz.",
          // "Cycle Time": "10-60 seconds",
        },
      },
      {
        id: "prototype-injection-molding",
        name: "Prototype Injection Molding",
        type: "Rapid Prototyping",
        capabilities: [
          "Fast turnaround prototypes",
          "Design validation",
          "Functional testing",
          "Small batch production",
        ],
        specifications: {
          "Time to Market": "Average 3-5 weeks",
          "Part Runs": "Prototype to Large Volume",
          // Tolerance: "±0.002 in",
        },
      },
      {
        id: "design-for-manufacturing",
        name: "Design for Manufacturing",
        type: "Engineering Services",
        capabilities: [
          "Design optimization",
          "Cost reduction analysis",
          "Material selection",
          "Manufacturability review",
          "DFM consultation",
        ],
        specifications: {
          "Service Type": "Engineering Support",
          Expertise: "Injection Molding & Tooling",
          Availability: "Full-time support",
        },
      },
    ],
    volumeRange: {
      min: 1000,
      max: 10000000,
      optimal: {
        min: 10000,
        max: 1000000,
      },
      unit: "pieces",
    },
    leadTime: {
      prototype: "N/A - Refer to Pardev",
      lowVolume: "4-6 weeks (including tooling)",
      highVolume: "6-8 weeks (including tooling)",
    },
    materials: ["ABS", "Polycarbonate", "Nylon", "Acetal", "TPE", "PP", "PE", "Engineering Resins"],
    processes: ["Injection Molding", "Tool Making", "Finishing", "Assembly", "Quality Control"],
    caseStudies: [],
    contactInfo: {
      email: "info@pti-mfg.com",
      phone: "(847) 742-7714",
      address: "456 Manufacturing Way, Elk Grove Village, IL 60007",
    },
    location: {
      // city: "Elk Grove Village",
      // state: "IL",
      country: "USA Based",
    },
    established: 1988,
  },
  {
    id: "cgr-tech",
    slug: "cgr-tech",
    name: "CGR Technologies",
    tagline: "Precision stamping and machining for demanding metal components.",
    description:
      "CGR Technologies Inc. – Stamping Group delivers precision metal stampings with high-accuracy parts of virtually any complexity, holding tolerances down to ±0.0005 in and micro-stamping thin-gage and thin-wall metals from 0.001 in to 0.125 in. The team also specializes in close-tolerance machining down to 50 millionths of an inch (0.0013 mm), routinely meeting strict geometric requirements in hardened steels, exotic alloys, titanium, Inconel, and other challenging materials.",
    about:
      "CGR Technologies Inc. – Stamping Group leverages extensive press capabilities to provide precision metal stampings for demanding applications. The team specializes in high-accuracy pieces of virtually any complexity, working to tolerances of ±0.0005 in. Stamping presses enable micro-stamping of thin-gage and thin-wall metals as thin as 0.001 in up to 0.125 in, supporting prototype, short-run, and low-volume production. Core stamping processes include coining, compound and progressive stamping, fine blanking, and open tooling. CGR Technologies also offers precision machining services focused on very tight dimensional and geometric control.",
    aboutSections: [
      {
        id: "stamping",
        title: "Stamping",
        paragraphs: [
          "CGR Technologies Inc. – Stamping Group leverages extensive press capabilities to provide precision metal stampings. We specialize in high-accuracy pieces of any complexity, working to tolerances of ±0.0005 in.",
          "Our stamping presses allow us to micro-stamp thin-gage and thin-wall metals as thin as 0.001 in up to a maximum of 0.125 in, supporting:",
        ],
        bulletGroups: [
          {
            id: "stamping-production-modes",
            items: ["Prototype production", "Short-run production", "Low-volume production"],
          },
          {
            id: "stamping-processes",
            title: "Our stamping processes include:",
            items: ["Coining", "Compound or progressive stamping", "Fine blanking", "Open tooling"],
          },
        ],
      },
      {
        id: "precision-machining",
        title: "Precision Machining",
        paragraphs: [
          "CGR Technologies, Inc. specializes in close-tolerance machining down to 50 millionths of an inch (0.0013 mm) on customer-designed parts.",
          "We excel in producing components that require tightly controlled dimensional and geometric tolerances, including:",
        ],
        bulletGroups: [
          {
            id: "geometric-tolerances",
            items: ["Flatness", "Perpendicularity", "Roundness", "Run-out", "Parallelism"],
          },
          {
            id: "difficult-materials",
            title: "Our team is highly experienced in machining difficult materials, including:",
            items: [
              "Hardened steels",
              "Exotic alloys",
              "Titanium",
              "Inconel",
              "Other challenging metals",
            ],
          },
          {
            id: "precision-expertise",
            title:
              "This expertise ensures that even the most demanding applications meet strict specifications with repeatable precision.",
            items: [],
          },
        ],
      },
    ],
    logo: "/images/companies/cgr-logo.webp",
    heroImage: "/images/companies/cgr-hero.webp",
    specialties: [
      "Tough Parts and Materials",
      "Precision CNC Machining",
      "Precision Stamping",
      "Prototyping",
      "Low-Volume, High-Mix Manufacturing",
      "Turning, Milling, Grinding",
    ],
    capabilities: [
      "cnc-machining",
      "metal-stamping",
      "multi-axis-machining",
      "cleanroom-manufacturing",
    ],
    industries: ["medical", "aerospace", "automotive", "defense", "electronics"],
    certifications: [
      {
        id: "iso-9001",
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "shield-check",
        issuedBy: "ISO",
      },
      // {
      //   id: "iso-13485",
      //   name: "ISO 13485:2016",
      //   description: "Medical Device Quality Management",
      //   icon: "heart-pulse",
      //   issuedBy: "ISO",
      // },
      // {
      //   id: "fda-registered",
      //   name: "FDA Registered",
      //   description: "FDA Registered Medical Device Manufacturer",
      //   icon: "shield-check",
      //   issuedBy: "FDA",
      // },
      // {
      //   id: "cleanroom",
      //   name: "ISO Class 7 Cleanroom",
      //   description: "Controlled Environment Manufacturing",
      //   icon: "wind",
      //   issuedBy: "ISO",
      // },
      {
        id: "as9100",
        name: "AS9100",
        description: "Aerospace Quality Management System",
        icon: "shield-check",
        issuedBy: "IAQG",
      },
    ],
    // equipment: [
    //   {
    //     id: "cnc-machining-centers",
    //     name: "5-Axis CNC Machining Centers",
    //     type: "CNC Machining",
    //     capabilities: ["Complex geometries", "Tight tolerances", "High precision"],
    //     specifications: {
    //       "Work Envelope": "600 x 500 x 400mm",
    //       Tolerance: '±0.0005"',
    //       Materials: "Aluminum, Stainless Steel, Titanium, Brass, Plastics",
    //     },
    //   },
    //   {
    //     id: "edm-machines",
    //     name: "Wire & Sinker EDM",
    //     type: "EDM",
    //     capabilities: ["Micro-machining", "Hard materials", "Complex shapes"],
    //     specifications: {
    //       Tolerance: '±0.0001"',
    //       "Wire Diameter": '0.004" - 0.012"',
    //     },
    //   },
    // ],
    volumeRange: {
      min: 100,
      max: 100000,
      optimal: {
        min: 500,
        max: 50000,
      },
      unit: "pieces",
    },
    leadTime: {
      prototype: "1-2 weeks",
      lowVolume: "2-4 weeks",
      highVolume: "4-8 weeks",
    },
    materials: [
      "Stainless Steel",
      "Titanium",
      "Aluminum",
      "Brass",
      "Medical-Grade Plastics",
      "Exotic Alloys",
    ],
    processes: [
      "CNC Machining",
      "EDM",
      "Grinding",
      "Polishing",
      "Passivation",
      "Anodizing",
      "Quality Inspection",
    ],
    caseStudies: [],
    contactInfo: {
      email: "info@cgrtech.com",
      phone: "(847) 742-7714",
      address: "789 Precision Lane, Schaumburg, IL 60173",
    },
    location: {
      // city: "Schaumburg",
      // state: "IL",
      country: "USA Based",
    },
    established: 2001,
  },
  {
    id: "minic-precision",
    slug: "minic-precision",
    name: "Minic Precision",
    tagline: "High-precision screw machining and CNC manufacturing.",
    description:
      "Minic Precision offers high-precision screw machining and CNC manufacturing for a wide range of components, from early prototypes through full production runs.",
    about:
      "Minic Precision provides high-precision screw machining and CNC manufacturing for components that demand tight tolerances, fine surface finishes, and repeatable quality. From early prototypes to full production runs, Minic supports customers across a wide range of diameters, lengths, and materials.",
    aboutSections: [
      {
        id: "capabilities",
        title: "Precision Machining Capabilities",
        paragraphs: [
          "Minic offers high-precision screw machining and CNC manufacturing for a wide range of components, from prototypes to full production runs.",
        ],
        bulletGroups: [
          {
            id: "diameters",
            title: "Diameters",
            items: ['0.005" to 1.00"'],
          },
          {
            id: "lengths",
            title: "Lengths",
            items: ['0.005" to 10.00"'],
          },
          {
            id: "surface-finish",
            title: "Surface Finish",
            items: ["Up to 16 microinches"],
          },
          {
            id: "tolerances",
            title: "Tolerances",
            items: ['Down to ±0.0001"'],
          },
        ],
      },
      {
        id: "materials",
        title: "Materials",
        paragraphs: [
          "Minic machines a wide range of metals and plastics to support demanding applications.",
        ],
        bulletGroups: [
          {
            id: "materials-list",
            items: [
              "Aircraft Aluminum",
              "Alloy Steel",
              "Aluminum",
              "Beryllium Copper",
              "Brass",
              "Carbon Steel",
              "Copper",
              "Nickel",
              "Nickel Silver",
              "Plastics",
              "Stainless Steel",
              "Tellurium Copper",
              "Titanium",
              "Tungsten",
            ],
          },
        ],
      },
      {
        id: "equipment",
        title: "Equipment Used",
        paragraphs: [],
        bulletGroups: [
          {
            id: "equipment-list",
            items: [
              "Tornos CNC Swiss turning machines",
              "Citizen CNC Swiss turning machines",
              "Tornos Swiss automatic screw machines",
            ],
          },
        ],
      },
      {
        id: "processes",
        title: "Processes Used",
        paragraphs: [],
        bulletGroups: [
          {
            id: "processes-list",
            items: [
              "CNC Swiss turning",
              "CAM Swiss automatic lathes",
              "CNC milling",
              "Cold heading",
            ],
          },
        ],
      },
      {
        id: "quantities",
        title: "Quantities",
        paragraphs: [],
        bulletGroups: [
          {
            id: "quantities-list",
            items: ["From prototyping to full production runs of all sizes"],
          },
        ],
      },
      {
        id: "secondary-operations",
        title: "Secondary Operations",
        paragraphs: [],
        bulletGroups: [
          {
            id: "secondary-ops-list",
            items: [
              "Broaching",
              "Grinding",
              "Heat treating",
              "Plating",
              "Tapping",
              "Thread rolling",
              "Tumbling",
            ],
          },
        ],
      },
      {
        id: "quality",
        title: "Quality Systems",
        paragraphs: [],
        bulletGroups: [
          {
            id: "quality-list",
            items: ["ISO 9001:2015 certified quality management system"],
          },
        ],
      },
    ],
    logo: "/images/companies/minic-logo.webp",
    heroImage: "/images/companies/minic-hero.webp",
    specialties: ["Swiss-Style Turning", "Micro-Machining", "High-Volume Small Parts"],
    capabilities: ["swiss-machining", "micro-machining", "thread-rolling"],
    industries: ["medical", "aerospace", "automotive", "defense", "electronics"],
    certifications: [
      {
        id: "iso-9001",
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "shield-check",
        issuedBy: "ISO",
      },
      {
        id: "itar",
        name: "ITAR Registered",
        description: "International Traffic in Arms Regulations",
        icon: "award",
        issuedBy: "US Department of State",
      },
    ],
    equipment: [
      {
        id: "swiss-lathes",
        name: "Swiss-Type CNC Lathes",
        type: "Swiss Machining",
        capabilities: ["Small diameter parts", "Complex features", "High precision"],
        specifications: {
          "Max Diameter": "32mm",
          "Max Length": "300mm",
          Tolerance: '±0.0002"',
          "Surface Finish": "Ra 8 micro-inches",
        },
      },
    ],
    volumeRange: {
      min: 500,
      max: 5000000,
      optimal: {
        min: 5000,
        max: 500000,
      },
      unit: "pieces",
    },
    leadTime: {
      prototype: "1-2 weeks",
      lowVolume: "2-3 weeks",
      highVolume: "3-6 weeks",
    },
    materials: ["Stainless Steel", "Aluminum", "Brass", "Titanium", "Plastics", "Exotic Alloys"],
    processes: [
      "Swiss Turning",
      "Milling",
      "Drilling",
      "Threading",
      "Grinding",
      "Deburring",
      "Inspection",
    ],
    caseStudies: [],
    contactInfo: {
      email: "info@minicprecision.com",
      phone: "(847) 742-7714",
      address: "321 Swiss Way, Arlington Heights, IL 60004",
    },
    location: {
      // city: "Arlington Heights",
      // state: "IL",
      country: "USA Based",
    },
    established: 1992,
  },
  {
    id: "carby",
    slug: "carby",
    name: "Carby Corporation",
    tagline: "Precision Deep Drawn Metals",
    description:
      "Carby Corporation excels in deep draw and progressive metal stamping, producing seamless and near-seamless components with superior dimensional consistency. We work with a wide range of metals and thicknesses, supporting complex geometries, tight tolerances, and repeatable high-volume production. In-house tooling, secondary operations, and quality systems ensure reliable performance from concept to completion.",
    about:
      "The Carby Corporation is a precision metal forming manufacturer specializing in deep draw metal stamping and complex formed components. With decades of manufacturing expertise, Carby partners with customers to produce high-quality, tight-tolerance parts from prototype through high-volume production. Our focus on engineering support, process control, and consistent quality makes Carby a trusted supplier across demanding industries.",
    aboutSections: [
      {
        id: "deep-draw",
        title: "Deep Draw Stamping",
        paragraphs: [
          "Carby’s deep draw stamping process forms flat metal blanks into cylindrical or complex shapes through a series of controlled drawing operations. This method allows for the production of strong, lightweight parts with smooth surfaces and minimal material waste. Progressive and secondary forming operations enable added features such as flanges, holes, threads, and precision cutoffs. Each process is tightly controlled to ensure consistent quality, structural integrity",
        ],
        bulletGroups: [
          {
            id: "deep-draw-capabilities",
            title: "Deep Draw Stamping Capabilities",
            items: [
              "Cylindrical & tubular parts – seamless or near-seamless",
              "Complex multi-draw components – multiple depth stages in a single part",
              "Progressive stamping – high-volume production with integrated secondary operations",
              "Shallow & deep cavities – from simple cups to deep, narrow geometries",
              "Flanged, pierced, and formed features – holes, flares, and custom contours",
              "Custom shapes for tight tolerances – tailored to specific industry requirements, and repeatability at scale.",
            ],
          },
        ],
      },
    ],
    logo: "/images/companies/carby-logo.webp",
    heroImage: "/images/companies/carby-hero.webp",
    capabilities: [],
    specialties: [
      "Deep Draw and Progressive Metal Stamping",
      "Complex, Tight-Tolerance Components",
      "Stainless Steel, Aluminum, Carbon Steel, and Specialty Alloys",
      "In-House Tooling",
      "Medical, Automotive, Aerospace, Industrial, and Electronics Markets",
      "Quality, Consistency, and Repeatable Results",
    ],
    industries: ["medical", "aerospace", "automotive", "defense", "electronics"],
    certifications: [
      {
        id: "iso-9001",
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "shield-check",
        issuedBy: "ISO",
      },
    ],
    contactInfo: {
      email: "",
      phone: "(860) 274-6741",
      address: "1121 Echo Lake Road, Watertown, CT 06795",
    },
    location: {
      country: "USA",
    },
    established: 1965,
  },
]

export const getCompanyBySlug = (slug: string): Company | undefined => {
  return companies.find(company => company.slug === slug)
}

export const getCompaniesByCapability = (capabilityId: string): Company[] => {
  return companies.filter(company => company.capabilities.includes(capabilityId))
}

export const getCompaniesByIndustry = (industrySlug: string): Company[] => {
  return companies.filter(company => company.industries.includes(industrySlug))
}

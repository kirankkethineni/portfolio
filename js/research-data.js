
const RESEARCH_DATA = {
    "chroma-sense": {
        title: "Chroma-Sense: Memory-Efficient Classification",
        overview: "A memory-efficient plant leaf disease classification model for edge devices that processes R, G, B channels independently to lower RAM and flash usage.",
        motivation: "Edge devices in smart agriculture have limited resources (RAM/Flash) and cannot run heavy CNNs. Cloud computing suffers from latency and connectivity issues in remote farms.",
        approach: "Implemented 'Sequential Multi-Channel Processing'. The model uses the same feature extractor for R, G, and B channels serially, utilizing a shared buffer, then concatenates features for classification. Quantized to Int8 for TinyML efficiency.",
        results: "Achieved 25% reduction in peak RAM and 60% reduction in Flash memory usage compared to standard MobileNetV2, while maintaining high accuracy (94% on Apple, 91% on Tomato datasets).",
        paperLink: "Chroma-Sense_2023-XXX-R0.pdf",
        githubLink: "https://github.com/kirankkethineni/ChromaSense.git"
    },
    "weed-out": {
        title: "WeedOut: Non-CNN Weed Management",
        overview: "A semi-supervised, non-CNN Agriculture Cyber-Physical System (A-CPS) for weed management that relies on crop shape and size rather than texture.",
        motivation: "CNNs require massive labeled training data and struggle with unknown weed species or varying environmental conditions. Manual weeding is labor-intensive, and blanket herbicide spraying is environmentally harmful.",
        approach: "Utilizes 'Profile Plots' to capture shape/size geometry and Dynamic Time Warping (DTW) to cluster crops. A farmer identifies the primary crop cluster (semi-supervised), and the system classifies the rest as weeds without prior training.",
        results: "Achieved 89% classification accuracy. Highly adaptable to different growth stages and environments without the need for retraining, unlike fixed-architecture CNNs.",
        paperLink: "SN-CS_2024-XXX-R0_WeedOut.pdf",
        githubLink: "https://github.com/kirankkethineni/WeedOut.git"
    },
    "spray-craft": {
        title: "SprayCraft: Variable Rate Precision Spraying",
        overview: "A graph-based route optimization system for drones to perform variable rate precision spraying, targeting disease hotspots.",
        motivation: "Disease spread is often non-uniform, originating from hotspots and diminishing outwards. Uniform spraying wastes resources and fails to address high-intensity infection zones effectively.",
        approach: "Models the field as a graph where nodes are diseased locations. Uses message passing to identify hotspots (nodes with high influence). Solves the Traveling Salesman Problem (TSP) for an optimal flight path and adjusts spray flow rate or altitude based on infection intensity.",
        results: "Validated on synthetic datasets. Successfully identifies hotspots and computes efficient flight paths that minimize distance while maximizing pesticide efficacy through variable dosing.",
        paperLink: "arXiv_2025-XXX_SprayCraft.pdf",
        githubLink: "https://github.com/kirankkethineni/SprayCraft.git"
    },
    "semantic-search": {
        title: "Semantic-Search: Knowledge-Driven Classification",
        overview: "A knowledge-driven classification method for plant diseases that interprets high-level semantic features (visual patterns, colors) rather than just pixel data.",
        motivation: "Standard CNNs are 'black boxes' that require retraining for every new class. They lack interpretability and struggle with data scarcity for rare diseases.",
        approach: "Integrates NLP to extract semantics (e.g., 'brown spots') from text to update a knowledge base. During inference, a CNN detects these semantics in the image, and a database query classifies the disease based on the identified features. No retraining is needed for new diseases.",
        results: "Achieved 90% accuracy across 11,000 images covering 21 diseases. Offers superior scalability and explainability compared to purely data-driven models.",
        paperLink: "IEEE-TAFE_2025-TAFE-02-0037-2025-R3_Semantic-Search.pdf",
        githubLink: "https://github.com/kirankkethineni/Semantic-Search.git"
    },
    "soil": {
        title: "SOIL: Privacy-First On-Device Inference",
        overview: "A privacy-first framework for leaf disease diagnosis that executes AI models directly within a mobile web browser, ensuring image data never leaves the user's device.",
        motivation: "Cloud-based solutions pose privacy risks and require internet connectivity in remote fields. App-based solutions have installation friction. Farmers need a secure, instant tool that works on any device without setup.",
        approach: "Leverages TensorFlow.js to run edge-optimized CNNs (based on Chroma-Sense) entirely client-side. Uses WebGL/WASM acceleration to perform inference locally in the browser. No app installation or server-side image processing required.",
        results: "Validated on iPhone, Android, and Windows devices with minimal latency (e.g., ~16ms on iPhone 14). Preserves 100% data privacy while maintaining high diagnostic accuracy (up to 96%).",
        paperLink: "OCIT_2025_SOIL.pdf",
        githubLink: "https://github.com/kirankkethineni/Soil.git"
    },
    "xpress-weed": {
        title: "XpressWeed: Few-Shot Weed Segmentation",
        overview: "A meta-learning framework for weed segmentation that treats plant leaves as 'textures' rather than objects, enabling rapid adaptation to new weed species with minimal data.",
        motivation: "Weeds vary immensely by region. Training a universal model is impossible, and generic few-shot learning fails due to complex leaf overlaps and Deformations. Farmers need models that adapt to their specific growing conditions quickly.",
        approach: "Combines texture-based pre-training with Model-Agnostic Meta-Learning (MAML). The model first learns robust leaf texture priors, then uses meta-learning to fine-tune itself for new, unseen weed species using only a handful of labeled examples (12-shot learning).",
        results: "Achieved 85% accuracy on unseen weed species using just 80 images, significantly outperforming traditional MAML (48%) and demonstrating practical rapid adaptation for real-world farming.",
        paperLink: "XpressWeed.pdf",
        githubLink: "https://github.com/kirankkethineni/XpressWeed.git"
    }
};

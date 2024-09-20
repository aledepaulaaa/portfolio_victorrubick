export interface ITecnicasDeUso {
    title: string
    description: string
}

export const tecnicasdeuso: ITecnicasDeUso[] = [
    {
        title: "Camera Tracking",
        description: `
            Camera Tracking is the technique that involves analyzing
            camera movement in a live shot to create corresponding motion
            data in a 3D environment. This allows graphic elements or 3D
            models to be inserted into the scene in a realistic manner, while
            maintaining consistency with the original camera movements and
            perspective
        `,
    },
    {
        title: "Rotoscoping",
        description: `
            Rotoscoping is the process of drawing or masking elements
            frame by frame in a video. It is often used to isolate actors or
            objects from the background, allowing them to be digitally
            manipulated or replaced. This technique is essential for creating
            precise and complex visual effects.
        `,
    },
    {
        title: "3D Insertion",
        description: `
            It involves the integration of three-dimensional models into a live
            footage. Using camera tracking data, the 3D models are
            positioned and animated in such a way that they appear to be
            part of the real environment, allowing the creation of scenes that
            would be impossible or impractical to film in real life.
        `,
    },
    {
        title: "3D Animation",
        description: `
            3D animation is the technique of creating movement in three-dimensional objects. It includes modeling, where objects are
            created, texturing, where the surfaces of models are detailed
            with colors and patterns, and animation, where objects are
            moved and manipulated to tell a story or create an effect.
        `,
    },
    {
        title: "Physics Simulations",
        description: `
            They are used to replicate real-world physical behaviors in a virtual
            environment. This includes simulating gravity, collisions, fluids, and
            other natural phenomena to create visual effects that respond
            realistically to physical interactions.
        `,
    },
    {
        title: "Smoke Simulations",
        description: `
            It involves the digital creation of smoke, vapor or fog, using
            complex algorithms that simulate the movement and dispersion of
            these particles in the air. These simulations are used to add realism
            to scenes of fire, explosions and foggy environments.
        `,
    },
    {
        title: "Particle Simulations:",
        description: `
            Particle simulations are used to create effects such as sparks, dust,
            rain, and magic. Thousands or even millions of individual particles
            are generated and manipulated to create complex collective
            behaviors, allowing for the creation of detailed and dynamic
            effects.
        `,
    },
    {
        title: "Composition",
        description: `
            Compositing is the technique of combining multiple visual elements
            into a single image or scene. Using masks, layers, and effects,
            elements from multiple sources can be integrated to create a
            cohesive and visually stunning scene. It is essential for the
            integration of CGI and VFX into filmmaking.
        `,
    }
]   
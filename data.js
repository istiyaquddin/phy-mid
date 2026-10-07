/* PHYSICS-1101 Master University Solutions & Problem Repository
   Curated Strictly for IIUC Midterm Examination (Autumn 2026 Syllabus & Past Papers)
   Departments: CSE & Engineering Programs
   
   Structure:
   1. Dynamics of Rigid Body (Definitions, Derivations 1-3, Mid Maths 1-5)
   2. Gravity & Gravitation (Definitions, Derivations 1-2, Mid Maths 1-9)
   3. Introductory Quantum Mechanics (Definitions, Derivations 1-2, Mid Maths 1-5)
   4. Verified Previous Years' Exam Question Papers (Spring 2022 - Spring 2026)
*/

const physicsData = [

  {
    id: "ch1-def-all",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "definition",
    qNumber: "Ch-1 | CLO-1",
    title: "Core Definitions: Rigid Body, Moment of Inertia, Radius of Gyration, Center of Mass, Torque & Conservation Laws",
    tags: ["Dynamics of Rigid Body", "Definitions", "CLO-1", "Exam Mandatory"],
    easyDefinition: `
      <strong>1. Rigid Body:</strong> A body that does not undergo any change in shape and volume under external forces (particles remain fixed).<br>
      <strong>2. Moment of Inertia ($I$):</strong> The rotational mass of a body—its resistance to changes in spinning motion ($I = \\sum m r^2$). Unit: $\\text{kg}\\cdot\\text{m}^2$.<br>
      <strong>3. Radius of Gyration ($k$):</strong> The effective distance from the axis where the entire mass can be placed to give the exact same moment of inertia ($k = \\sqrt{I/M}$). Unit: meter ($\\text{m}$).<br>
      <strong>4. Center of Mass (COM):</strong> The unique balance point where the whole mass of a body is assumed to be concentrated for motion calculations.<br>
      <strong>5. Torque ($\\tau$):</strong> The rotational turning force about an axis ($\\tau = r F \\sin\\theta = I\\alpha$). Unit: $\\text{N}\\cdot\\text{m}$.<br>
      <strong>6. Collisions:</strong><br>
      &bull; <em>Elastic:</em> Both momentum and kinetic energy are conserved (no energy lost).<br>
      &bull; <em>Inelastic:</em> Momentum is conserved, but kinetic energy is lost (heat/sound).<br>
      <strong>7. Conservation of Energy:</strong> Energy cannot be created or destroyed; it only changes form.<br>
      <strong>8. Conservation of Momentum:</strong> If no outside force acts on a system, total momentum never changes.
      <span class="mem-hook">💡 Teacher's Memory Hook: Linear motion has Mass ($m$) & Force ($F$). Rotational motion has Moment of Inertia ($I$) & Torque ($\\tau$).</span>
    `,
    definition: `
      <div class="def-block">
        <strong>1. Ideal Rigid Body:</strong> A solid body in which the relative perpendicular distance between any two constituent particles remains strictly constant over time, regardless of external forces or torques acting on it. It experiences zero deformation.<br>
        <strong>2. Moment of Inertia ($I$):</strong> The rotational analogue of mass. It measures a body's resistance to angular acceleration about a specified axis of rotation, defined as the sum of the products of mass of each constituent particle and the square of its perpendicular distance from the axis of rotation:
        $$I = \\sum_{i=1}^n m_i r_i^2 = \\int r^2 dm \\quad [\\text{SI Unit: } \\text{kg}\\cdot\\text{m}^2, \\text{ Dimension: } M L^2]$$
        <strong>3. Radius of Gyration ($k$):</strong> The effective radial distance from the axis of rotation at which the entire mass $M$ of the body could be imagined to be concentrated such that its moment of inertia remains completely unchanged:
        $$I = M k^2 \\implies k = \\sqrt{\\frac{I}{M}} \\quad [\\text{SI Unit: metre, m}]$$
        <strong>4. Center of Mass (COM):</strong> The unique spatial point where the entire mass of a physical system can be assumed to be concentrated for describing translational mechanics:
        $$\\vec{r}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{1}{M}\\int \\vec{r} dm$$
        <strong>5. Torque ($\\vec{\\tau}$):</strong> The rotational turning tendency of a force about an axis:
        $$\\vec{\\tau} = \\vec{r} \\times \\vec{F} \\implies |\\vec{\\tau}| = r F \\sin\\theta = I\\alpha \\quad [\\text{SI Unit: } \\text{N}\\cdot\\text{m}]$$
        <strong>6. Collisions:</strong> An isolated event where two or more bodies exert relatively large mutual forces over a brief contact interval:
        <ul style="margin-left: 1.5rem; margin-top: 0.3rem;">
          <li><em>Elastic Collision:</em> Both total linear momentum and total kinetic energy are strictly conserved ($\\Delta K = 0$).</li>
          <li><em>Inelastic Collision:</em> Momentum is conserved, but kinetic energy is partially converted into internal thermal/acoustic energy ($\\Delta K < 0$).</li>
          <li><em>Perfectly Inelastic Collision:</em> Colliding bodies coalesce and move with a single common velocity, suffering maximal kinetic energy loss.</li>
        </ul>
        <strong>7. Conservation Theorems (Statements):</strong>
        <ul style="margin-left: 1.5rem; margin-top: 0.3rem;">
          <li><em>Conservation of Energy:</em> Energy can neither be created nor destroyed; it only transforms from one manifestation to another. The total energy of an isolated system remains constant.</li>
          <li><em>Conservation of Linear Momentum:</em> If the net external force acting on a system is zero, the total linear momentum of the system remains invariant over time ($\\sum \\vec{F}_{ext} = 0 \\implies \\vec{P} = \\text{constant}$).</li>
        </ul>
      </div>
    `,
    basicIdea: "In translational motion, mass resists changes in linear velocity. In rotational motion, Moment of Inertia ($I$) resists changes in angular velocity. Spreading mass further away from the pivot axis increases its moment of inertia quadratically ($r^2$), making rotation significantly more resistant.",
    banglaIntuition: "দৃঢ় বস্তু হলো এমন এক বস্তু যার কণাগুলোর পারস্পরিক দূরত্ব সর্বাবস্থায় স্থির থাকে। রৈখিক গতিতে ভর ($m$) যা করে, ঘূর্ণন গতিতে জড়তার ভ্রামক ($I$) ঠিক তাই করে। অক্ষ থেকে দূরত্ব যত বাড়ে, ঘুরানো তত কঠিন হয়। ভরকেন্দ্র হলো সমগ্র ভরের কার্যকর কেন্দ্রবিন্দু।",
    importantFormula: "1. $I = \\sum m_i r_i^2 = M k^2$\n2. $k = \\sqrt{I/M}$\n3. $\\tau = r F \\sin\\theta = I\\alpha$\n4. Solid Disc: $I = \\frac{1}{2} M R^2, k = \\frac{R}{\\sqrt{2}}$\n5. Thin Ring/Hoop: $I = M R^2, k = R$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Summary of Essential Units & Dimensions for Exam:</div>
        <ul>
          <li><strong>Moment of Inertia ($I$):</strong> $[M L^2 T^0]$, SI unit: $\\text{kg}\\cdot\\text{m}^2$</li>
          <li><strong>Radius of Gyration ($k$):</strong> $[M^0 L T^0]$, SI unit: $\\text{m}$</li>
          <li><strong>Torque ($\\tau$):</strong> $[M L^2 T^{-2}]$, SI unit: $\\text{N}\\cdot\\text{m}$</li>
          <li><strong>Angular Acceleration ($\\alpha$):</strong> $[M^0 L^0 T^{-2}]$, SI unit: $\\text{rad/s}^2$</li>
        </ul>
      </div>
    `,
    finalAnswer: "All 7 fundamental definitions, collision classes, and conservation laws verified for CLO-1."
  },
  {
    id: "ch1-theo-rotke",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "derivation",
    qNumber: "Ch-1 | Broad 1",
    title: "Derive an Expression for the Rotational Kinetic Energy of a Rigid Body ($K_{rot} = \\frac{1}{2} I \\omega^2$)",
    tags: ["Dynamics of Rigid Body", "Derivation", "CLO-2", "5-6 Marks"],
    easyDefinition: `
      <strong>Rotational Kinetic Energy:</strong> The kinetic energy of an object purely due to spinning about an axis ($K_{rot} = \\frac{1}{2} I \\omega^2$).
      <span class="mem-hook">💡 Direct Analogue: In linear motion $K = \\frac{1}{2} m v^2$. In rotation, replace $m \\to I$ and $v \\to \\omega$ to get $K_{rot} = \\frac{1}{2} I \\omega^2$.</span>
    `,
    definition: "Rotational Kinetic Energy represents the mechanical energy possessed by an extended rigid body solely by virtue of its rotation about a fixed axis.",
    basicIdea: "A rotating rigid body consists of millions of particles. While every particle rotates with the identical angular velocity $\\omega$, their tangential speeds $v_i = r_i \\omega$ increase linearly with distance from the axis. Summing the individual kinetic energies gives $K_{rot} = \\frac{1}{2} I \\omega^2$.",
    banglaIntuition: "ঘূর্ণনরত দৃঢ় বস্তুর প্রতিটি কণার কৌণিক বেগ $\\omega$ একই, কিন্তু অক্ষ থেকে দূরত্বের ভিন্নতার কারণে রৈখিক বেগ $v_i = r_i\\omega$ ভিন্ন। প্রতিটি কণার গতিশক্তি $\\frac{1}{2}m_i v_i^2$ যোগ করলে মোট গতিশক্তি দাঁড়ায় $\\frac{1}{2}I\\omega^2$, যা রৈখিক গতিশক্তি $\\frac{1}{2}mv^2$-এর চমৎকার প্রতিরূপ।",
    importantFormula: "$K_{rot} = \\frac{1}{2} I \\omega^2 \\quad \\text{where } I = \\sum_{i=1}^n m_i r_i^2$",
    proof: `
      <h4>Derivation Step-by-Step:</h4>
      <p><strong>Step 1: System Definition:</strong> Consider a rigid body of mass $M$ rotating about a fixed axis $XY$ with uniform angular velocity $\\omega$. Let the body be composed of $n$ particles of masses $m_1, m_2, \\dots, m_n$ situated at perpendicular distances $r_1, r_2, \\dots, r_n$ from the axis of rotation.</p>
      
      <p><strong>Step 2: Tangential Velocities:</strong> Because the body is rigid, all particles sweep through the identical angle in any given time. Therefore, angular velocity $\\omega$ is constant for all particles. The tangential linear speeds are:</p>
      $$v_1 = r_1 \\omega, \\quad v_2 = r_2 \\omega, \\quad \\dots, \\quad v_n = r_n \\omega$$

      <p><strong>Step 3: Kinetic Energy of Individual Particles:</strong></p>
      $$k_1 = \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} m_1 (r_1 \\omega)^2 = \\frac{1}{2} m_1 r_1^2 \\omega^2$$
      $$k_2 = \\frac{1}{2} m_2 v_2^2 = \\frac{1}{2} m_2 (r_2 \\omega)^2 = \\frac{1}{2} m_2 r_2^2 \\omega^2$$
      $$k_n = \\frac{1}{2} m_n v_n^2 = \\frac{1}{2} m_n (r_n \\omega)^2 = \\frac{1}{2} m_n r_n^2 \\omega^2$$

      <p><strong>Step 4: Summation for Total Energy:</strong> The total rotational kinetic energy of the rigid body is the scalar sum of the kinetic energies of all its individual particles:</p>
      $$K = k_1 + k_2 + \\dots + k_n$$
      $$K = \\frac{1}{2} m_1 r_1^2 \\omega^2 + \\frac{1}{2} m_2 r_2^2 \\omega^2 + \\dots + \\frac{1}{2} m_n r_n^2 \\omega^2$$
      $$K = \\frac{1}{2} \\omega^2 \\left( \\sum_{i=1}^n m_i r_i^2 \\right)$$

      <p><strong>Step 5: Substituting Moment of Inertia:</strong> By definition, the moment of inertia is $I = \\sum_{i=1}^n m_i r_i^2$. Therefore:</p>
      $$K_{rot} = \\frac{1}{2} I \\omega^2 \\quad \\blacksquare \\text{ [PROVED]}$$
    `,
    stepByStepSolution: "Derivation fully structured with system configuration, kinematic velocity substitutions, summation, and moment of inertia definition.",
    finalAnswer: "K_rot = 1/2 I ω² (Proved)"
  },
  {
    id: "ch1-theo-axes",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "derivation",
    qNumber: "Ch-1 | Broad 2",
    title: "Theorems of Perpendicular Axes & Parallel Axes for Moment of Inertia (Statements & Proofs)",
    tags: ["Dynamics of Rigid Body", "Derivation", "CLO-2", "6 Marks"],
    easyDefinition: `
      <strong>1. Perpendicular Axes Theorem:</strong> For a flat 2D lamina, the moment of inertia about the perpendicular $Z$-axis equals the sum of the two planar axes: $I_z = I_x + I_y$.<br>
      <strong>2. Parallel Axes Theorem:</strong> Shifting an axis by distance $h$ from the center of mass adds $M h^2$: $I = I_{cm} + M h^2$.
      <span class="mem-hook">💡 Golden Memory Rule: Perpendicular Axes = ONLY for flat 2D sheets! Parallel Axes = works for ANY 3D body!</span>
    `,
    definition: "Fundamental structural theorems allowing the moment of inertia about any spatial axis to be deduced from known centroidal or orthogonal coordinate axes.",
    basicIdea: "Perpendicular axis theorem applies strictly to 2D flat plates: $I_z = I_x + I_y$. Parallel axis theorem applies to any 3D body: shifting an axis by distance $d$ away from the center of mass adds $M d^2$ to $I_{cm}$.",
    banglaIntuition: "লম্ব অক্ষ উপপাদ্য কেবল দ্বিমাত্রিক পাতলা পাতের জন্য প্রযোজ্য ($I_z = I_x + I_y$)। সমান্তরাল অক্ষ উপপাদ্য যেকোনো বস্তুর জন্য প্রযোজ্য: ভরকেন্দ্রগামী অক্ষের সাপেক্ষে জড়তার ভ্রামক সর্বনিম্ন হয় এবং $d$ দূরত্বে সমান্তরাল অক্ষে $Md^2$ যুক্ত হয় ($I = I_{cm} + Md^2$)।",
    importantFormula: "1. Perpendicular Axes (2D Laminas): $I_z = I_x + I_y$\n2. Parallel Axes (Any Body): $I = I_{cm} + M d^2$",
    proof: `
      <h4>Part (A): Theorem of Perpendicular Axes</h4>
      <p><strong>Statement:</strong> The moment of inertia of a plane laminar body about an axis perpendicular to its plane ($Z$-axis) is equal to the sum of the moments of inertia about two mutually perpendicular axes ($X$ and $Y$) lying in the plane of the lamina, intersecting at the point where the perpendicular axis passes.</p>
      <p><strong>Proof:</strong> Let a plane lamina lie in the $XY$-plane with origin $O$. Axis $OZ$ is perpendicular to the plane. Consider a particle of mass $m$ situated at point $P(x, y)$ at perpendicular distance $r$ from $O$.</p>
      <p>From plane geometry: $r^2 = x^2 + y^2$.</p>
      <p>The moment of inertia of the whole lamina about the $Z$-axis is:</p>
      $$I_z = \\sum m r^2 = \\sum m (x^2 + y^2) = \\sum m x^2 + \\sum m y^2$$
      <p>Notice that distance from the $X$-axis is $y$, so $\\sum m y^2 = I_x$.</p>
      <p>Distance from the $Y$-axis is $x$, so $\\sum m x^2 = I_y$.</p>
      <p>Substituting these relations:</p>
      $$I_z = I_y + I_x \\implies I_z = I_x + I_y \\quad \\blacksquare \\text{ [PROVED]}$$

      <hr style="margin:1.25rem 0; border:0; border-top:1px solid var(--border-glass);">

      <h4>Part (B): Theorem of Parallel Axes</h4>
      <p><strong>Statement:</strong> The moment of inertia of a body about any axis is equal to the sum of its moment of inertia about a parallel axis passing through its center of gravity ($I_G$) and the product of the total mass of the body and the square of the perpendicular distance between the two parallel axes.</p>
      <p><strong>Proof:</strong> Let an axis pass through center of gravity $G$ with moment of inertia $I_G$. Let a parallel axis pass through $O$ at perpendicular distance $h$ from $G$. Consider a particle of mass $m$ at point $P$, situated at distance $r'$ from $G$ and distance $r$ from $O$.</p>
      <p>From geometry (applying Pythagoras theorem to $\\triangle OPA$):</p>
      $$r^2 = (x + h)^2 + y^2 = x^2 + 2xh + h^2 + y^2$$
      <p>Since $r'^2 = x^2 + y^2$:</p>
      $$r^2 = r'^2 + h^2 + 2xh$$
      <p>The moment of inertia about the axis through $O$ is:</p>
      $$I_O = \\sum m r^2 = \\sum m [r'^2 + h^2 + 2xh]$$
      $$I_O = \\sum m r'^2 + \\sum m h^2 + 2h \\sum m x$$
      <p>Now evaluate the terms:</p>
      <ol>
        <li>$\\sum m r'^2 = I_G$ (Moment of inertia about the centroidal axis).</li>
        <li>$\\sum m h^2 = (\\sum m) h^2 = M h^2$ (where $M = \\sum m$ is total mass).</li>
        <li>$\\sum m x = 0$ (because the body balances about center of mass $G$, meaning the algebraic sum of mass moments about $G$ is identically zero).</li>
      </ol>
      <p>Substituting these values gives:</p>
      $$I_O = I_G + M h^2 \\quad \\blacksquare \\text{ [PROVED]}$$
    `,
    stepByStepSolution: "Both proofs derived with coordinate geometries, integral/summation distributions, and physical conditions.",
    finalAnswer: "Perpendicular: Iz = Ix + Iy | Parallel: I = IG + M h² (Proved)"
  },
  {
    id: "ch1-theo-momentum",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "derivation",
    qNumber: "Ch-1 | Broad 3",
    title: "Law of Conservation of Linear Momentum of Two Bodies in a Bound System (Proof)",
    tags: ["Dynamics of Rigid Body", "Derivation", "CLO-2", "5 Marks"],
    easyDefinition: `
      <strong>Conservation of Linear Momentum:</strong> In an isolated system with no external forces, the total momentum remains strictly constant ($m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$).
      <span class="mem-hook">💡 Physical Origin: Action and reaction forces are equal and opposite ($F_{12} = -F_{21}$), so internal changes cancel out completely!</span>
    `,
    definition: "Statement: If the vector sum of external forces acting on a system is zero, the total linear momentum of the system remains constant over time.",
    basicIdea: "Internal interaction forces come in equal and opposite pairs by Newton's Third Law ($F_{B \\text{ on } A} = -F_{A \\text{ on } B}$). Expressing forces as time derivatives of momentum ($F = dP/dt$) shows the total time derivative vanishes.",
    banglaIntuition: "নিউটনের ৩য় সূত্র অনুযায়ী দুই বস্তুর পারস্পরিক ক্রিয়া ও প্রতিক্রিয়া বল পরস্পর সমান ও বিপরীতমুখী ($F_{BA} = -F_{AB}$)। ২য় সূত্র অনুসারে $F = dP/dt$। ফলে দুটি বলের যোগফল শূন্য হওয়ায় মোট ভরবেগের পরিবর্তন শূন্য হয় এবং ভরবেগ সংরক্ষিত থাকে।",
    importantFormula: "$\\vec{F}_{B\\text{ on }A} = -\\vec{F}_{A\\text{ on }B} \\implies \\frac{d}{dt}(\\vec{P}_A + \\vec{P}_B) = 0 \\implies \\vec{P}_{total} = \\text{Constant}$",
    proof: `
      <h4>Derivation from Newton's Laws:</h4>
      <p><strong>Step 1:</strong> Consider two particles $A$ and $B$ that interact with each other in an isolated bound system with zero external force. According to Newton's Third Law, the mutual interaction forces are equal in magnitude and opposite in direction:</p>
      $$\\vec{F}_{B \\text{ on } A} = -\\vec{F}_{A \\text{ on } B} \\implies \\vec{F}_{B \\text{ on } A} + \\vec{F}_{A \\text{ on } B} = 0 \\quad \\dots (1)$$
      
      <p><strong>Step 2:</strong> By Newton's Second Law of Motion, force is defined as the time rate of change of linear momentum:</p>
      $$\\vec{F}_{B \\text{ on } A} = \\frac{d\\vec{P}_A}{dt} \\quad \\text{and} \\quad \\vec{F}_{A \\text{ on } B} = \\frac{d\\vec{P}_B}{dt}$$

      <p><strong>Step 3:</strong> Substituting these into equation (1):</p>
      $$\\frac{d\\vec{P}_A}{dt} + \\frac{d\\vec{P}_B}{dt} = 0$$
      $$\\frac{d}{dt} [\\vec{P}_A + \\vec{P}_B] = 0 \\implies \\frac{d\\vec{P}_{total}}{dt} = 0$$

      <p><strong>Step 4:</strong> Integrating with respect to time:</p>
      $$\\vec{P}_{total} = \\vec{P}_A + \\vec{P}_B = \\text{Constant} \\quad \\blacksquare \\text{ [PROVED]}$$
      <p>Hence, the total linear momentum of the bound system remains constant.</p>
    `,
    stepByStepSolution: "Derivation verified using Newton's second and third laws of motion.",
    finalAnswer: "P_total = PA + PB = Constant (Proved)"
  },
  {
    id: "ch1-math-1",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    qNumber: "Ch-1 | Math 1",
    title: "Scenario: Rotor Explosion in Spin-Testing Lab (Mass $272\\text{ kg}$, Radius $38.0\\text{ cm}$, $\\omega = 14,000\\text{ rev/min}$)",
    tags: ["Dynamics of Rigid Body", "Numerical", "Mid Topic 1", "3 Marks"],
    easyDefinition: `
      <strong>Rotational Energy of a Spinning Rotor:</strong> The explosive kinetic energy released by a spinning disk is its stored rotational energy:
      $$E = \\frac{1}{2} I \\omega^2 = \\frac{1}{4} M R^2 \\omega^2$$
      <span class="mem-hook">💡 Quick Exam Rule: Convert rev/min to rad/s ($\\omega = \\frac{2\\pi N}{60}$), disk inertia is $I = \\frac{1}{2}MR^2$, then $E = \\frac{1}{2}I\\omega^2$.</span>
    `,
    definition: "Scenario: In 1985, Test Devices (Incorporation) was spin-testing a sample of a solid steel rotor (a disk) of mass $M = 272\\text{ kg}$ and radius $R = 38.0\\text{ cm}$. When the sample reached an angular speed $\\omega$ of $14,000\\text{ rev/min}$, how much energy was released in the explosion of the rotor?",
    basicIdea: "The rotor is modeled as a solid uniform disk ($I = \\frac{1}{2} M R^2$). Convert rpm to rad/s using $\\omega = \\frac{2\\pi N}{60}$. The explosive energy released equals its total stored rotational kinetic energy $E = \\frac{1}{2} I \\omega^2$.",
    banglaIntuition: "ডিস্কের জড়তার ভ্রামক $I = \\frac{1}{2}MR^2$। ঘূর্ণন বেগ $\\omega = \\frac{2\\pi \\times 14000}{60} = 1466.08\\text{ rad/s}$। মোট গতিশক্তি $E = \\frac{1}{2}I\\omega^2 = 2.11 \\times 10^7\\text{ J}$, যা বিস্ফোরণের সময় ধ্বংসাত্মক শক্তি হিসেবে নির্গত হয়।",
    importantFormula: "1. $\\omega = \\frac{2\\pi N}{60}$\n2. $I = \\frac{1}{2} M R^2$\n3. $E = K_{rot} = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 1: Identify Given Data & Convert to SI Units:</div>
        <ul>
          <li>Mass of solid rotor disk, $M = 272\\text{ kg}$</li>
          <li>Radius of disk, $R = 38.0\\text{ cm} = 0.380\\text{ m}$</li>
          <li>Rotational speed, $N = 14,000\\text{ rev/min}$ (rpm)</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 2: Calculate Angular Velocity ($\\omega$):</div>
        $$\\omega = \\frac{2 \\times \\pi \\times N}{60} = \\frac{2 \\times 3.1416 \\times 14000}{60} = \\frac{87964.8}{60} \\approx 1466.08\\text{ rad/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 3: Calculate Moment of Inertia of the Solid Rotor Disk ($I$):</div>
        $$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 272\\text{ kg} \\times (0.380\\text{ m})^2$$
        $$I = 136 \\times 0.1444 = 19.64\\text{ kg}\\cdot\\text{m}^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 4: Calculate Rotational Kinetic Energy Released ($E$):</div>
        $$E = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\times 19.64\\text{ kg}\\cdot\\text{m}^2 \\times (1466.08\\text{ rad/s})^2$$
        $$E = 9.82 \\times 2,149,390.5 \\approx 21,107,015\\text{ Joules} = 2.11 \\times 10^7\\text{ J} \\quad (21.11\\text{ MJ})$$
      </div>
    `,
    shortcut: "Direct calculation: $E = \\frac{1}{4} M R^2 \\omega^2 = \\frac{1}{4}(272)(0.38)^2(1466.08)^2 = 2.11 \\times 10^7\\text{ J}$.",
    commonMistakes: "Remember to convert $38.0\\text{ cm}$ to $0.38\\text{ m}$ before squaring, and multiply $N$ by $2\\pi/60$ to convert rpm to rad/s.",
    finalAnswer: "Energy released = 2.11 × 10⁷ J (or 21.11 MJ)"
  },
  {
    id: "ch1-math-2",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    qNumber: "Ch-1 | Math 2",
    title: "Thin Spherical Shell with Applied Torque: Rotational Inertia & Mass",
    tags: ["Dynamics of Rigid Body", "Numerical", "Mid Topic 2", "3 Marks"],
    easyDefinition: `
      <strong>Torque on Thin Spherical Shell:</strong> Applied torque gives angular acceleration via $\\tau = I\\alpha$. A thin hollow shell has moment of inertia $I = \\frac{2}{3} M R^2$.
      $$I = \\frac{\\tau}{\\alpha}, \\quad M = \\frac{3I}{2R^2}$$
      <span class="mem-hook">💡 Quick Exam Rule: First find $I = \\tau / \\alpha$, then isolate mass $M = \\frac{3I}{2R^2}$.</span>
    `,
    definition: "A thin spherical shell has a radius of $1.90\\text{ m}$. An applied torque of $960\\text{ N}\\cdot\\text{m}$ gives the shell an angular acceleration of $6.20\\text{ rad/s}^2$ about an axis through the center of the shell. What are (a) the rotational inertia of the shell about that axis and (b) the mass of the shell? [Given: for thin spherical shell, $I = \\frac{2}{3} M R^2$]",
    basicIdea: "Use Newton's rotational second law $\\tau = I \\alpha$ to solve for $I = \\tau / \\alpha$. Then invert the spherical shell moment of inertia equation to find mass $M = 3I / (2R^2)$.",
    banglaIntuition: "টর্কের সূত্র $\\tau = I \\alpha$ থেকে সরাসরি জড়তার ভ্রামক $I = \\tau / \\alpha = 154.84\\text{ kg}\\cdot\\text{m}^2$। এরপর গোলকীয় খোলসের সূত্র $I = \\frac{2}{3}MR^2$ থেকে ভর $M = \\frac{3I}{2R^2} = 64.34\\text{ kg}$।",
    importantFormula: "1. $\\tau = I \\alpha \\implies I = \\frac{\\tau}{\\alpha}$\n2. $I = \\frac{2}{3} M R^2 \\implies M = \\frac{3I}{2R^2}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Radius of spherical shell, $R = 1.90\\text{ m}$</li>
          <li>Applied torque, $\\tau = 960\\text{ N}\\cdot\\text{m}$</li>
          <li>Angular acceleration, $\\alpha = 6.20\\text{ rad/s}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (a): Rotational Inertia ($I$):</div>
        $$\\tau = I \\alpha \\implies I = \\frac{\\tau}{\\alpha} = \\frac{960\\text{ N}\\cdot\\text{m}}{6.20\\text{ rad/s}^2} \\approx 154.84\\text{ kg}\\cdot\\text{m}^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (b): Mass of the Shell ($M$):</div>
        <p>Using the thin spherical shell formula $I = \\frac{2}{3} M R^2$:</p>
        $$M = \\frac{3 \\times I}{2 \\times R^2} = \\frac{3 \\times 154.84}{2 \\times (1.90)^2} = \\frac{464.52}{2 \\times 3.61} = \\frac{464.52}{7.22} \\approx 64.34\\text{ kg}$$
      </div>
    `,
    finalAnswer: "(a) Rotational inertia I = 154.84 kg·m² | (b) Mass M = 64.34 kg"
  },
  {
    id: "ch1-math-3",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    qNumber: "Ch-1 | Math 3",
    title: "Small Wind Turbine Blade: Moment of Inertia from Center of Mass",
    tags: ["Dynamics of Rigid Body", "Numerical", "Mid Topic 3", "3 Marks"],
    easyDefinition: `
      <strong>Moment of Inertia of a Turbine Blade:</strong>
      For a rotating body whose total mass $M$ is centered at distance $r$ from the axis, the moment of inertia is:
      $$I = M r^2$$
      <span class="mem-hook">💡 Quick Exam Rule: Multiply total mass ($M$) by the square of distance to the pivot ($r^2$).</span>
    `,
    definition: "The blade of a small wind turbine is rotating about an axis of rotation, and the center of mass is at a distance of $2.5\\text{ m}$ from that axis of rotation. The total mass of the rotating rigid body is $10\\text{ kg}$. Find the moment of inertia.",
    basicIdea: "When the extended body is treated with its total mass effectively concentrated at its center of mass, $I = M r^2$. Alternatively, if modeled as a uniform slender rod pivoted at its end, $I = \\frac{1}{3} M L^2$. Both interpretations are explained.",
    banglaIntuition: "ভরকেন্দ্রে সমগ্র ভর কেন্দ্রীভূত বিন্দু-ভর মডেল অনুসারে $I = M r^2 = 10 \\times (2.5)^2 = 62.5\\text{ kg}\\cdot\\text{m}^2$। শিক্ষক যদি দণ্ড হিসেবে মডেল করেন যার দৈর্ঘ্য $L = 2r = 5\\text{ m}$, তবে $I = \\frac{1}{3}ML^2 = 83.33\\text{ kg}\\cdot\\text{m}^2$।",
    importantFormula: "1. Point-Mass Centroidal Model: $I = M r^2$\n2. Slender Rod Pivoted at End ($L=2r$): $I = \\frac{1}{3} M L^2$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Data:</div>
        <ul>
          <li>Total mass, $M = 10\\text{ kg}$</li>
          <li>Distance of center of mass from axis, $r = 2.5\\text{ m}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation (Curriculum Standard Representation):</div>
        $$I = M r^2 = 10\\text{ kg} \\times (2.5\\text{ m})^2 = 10 \\times 6.25 = 62.5\\text{ kg}\\cdot\\text{m}^2$$
        <p><em>Analytical Note:</em> If the blade is treated as a uniform slender rod pivoted at one end of length $L = 5\\text{ m}$ (where COM is at $L/2 = 2.5\\text{ m}$):</p>
        $$I = \\frac{1}{3} M L^2 = \\frac{1}{3} (10) (5)^2 = \\frac{250}{3} \\approx 83.33\\text{ kg}\\cdot\\text{m}^2$$
      </div>
    `,
    finalAnswer: "Moment of Inertia I = 62.5 kg·m² (as point mass) [or 83.33 kg·m² as slender rod]"
  },
  {
    id: "ch1-math-4",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    qNumber: "Ch-1 | Math 4",
    title: "Flywheel Dynamics: Angular Velocity, Moment of Inertia & Rotational Energy",
    tags: ["Dynamics of Rigid Body", "Flywheel", "Mid Topic 4", "3 Marks"],
    easyDefinition: `
      <strong>Flywheel Dynamics & Rotational Energy:</strong>
      A flywheel rotating at frequency $f$ rev/s has angular velocity $\\omega = 2\\pi f$. Modeled as a solid disk:
      $$\\omega = 2\\pi f, \\quad I = \\frac{1}{2} M R^2, \\quad E = \\frac{1}{2} I \\omega^2$$
      <span class="mem-hook">💡 Quick Exam Rule: Find $\\omega = 2\\pi f$, calculate $I = \\frac{1}{2}MR^2$, then $E = \\frac{1}{2}I\\omega^2$.</span>
    `,
    definition: "A flywheel of mass $100\\text{ kg}$ and radius $0.5\\text{ m}$ makes $10\\text{ revolutions per second}$. Calculate (i) angular velocity, (ii) moment of inertia, and (iii) the energy of the flywheel. [A flywheel is treated as a solid uniform disc]",
    basicIdea: "Frequency $f = 10\\text{ rev/s}$ gives $\\omega = 2\\pi f$. For a solid uniform disc, $I = \\frac{1}{2} M R^2$. Kinetic energy is $E = \\frac{1}{2} I \\omega^2$. If treated as a rim-concentrated ring, $I = M R^2$.",
    banglaIntuition: "প্রতি সেকেন্ডে ১০ বার ঘুরলে কৌণিক বেগ $\\omega = 2\\pi \\times 10 = 62.83\\text{ rad/s}$। নিরেট ডিস্ক ধরলে $I = \\frac{1}{2}MR^2 = 12.5\\text{ kg}\\cdot\\text{m}^2$ এবং শক্তি $E = 24.67\\text{ kJ}$। রিম-কেন্দ্রীভূত ধরলে $I = 25\\text{ kg}\\cdot\\text{m}^2$ এবং শক্তি $E = 49.35\\text{ kJ}$।",
    importantFormula: "1. $\\omega = 2\\pi f$\n2. Solid Disc: $I = \\frac{1}{2} M R^2 \\quad (Rim: I = M R^2)$\n3. $E = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Mass, $M = 100\\text{ kg}$</li>
          <li>Radius, $R = 0.5\\text{ m}$</li>
          <li>Rotational frequency, $f = 10\\text{ rev/s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Angular Velocity ($\\omega$):</div>
        $$\\omega = 2 \\times \\pi \\times f = 2 \\times 3.1416 \\times 10 = 20 \\times 3.1416 \\approx 62.83\\text{ rad/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Moment of Inertia ($I$):</div>
        <p><strong>For solid uniform disc:</strong></p>
        $$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 100 \\times (0.5)^2 = 50 \\times 0.25 = 12.5\\text{ kg}\\cdot\\text{m}^2$$
        <p><em>(If treated as rim-concentrated ring: $I_{rim} = M R^2 = 100 \\times 0.25 = 25.0\\text{ kg}\\cdot\\text{m}^2$)</em></p>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (iii): Energy of Flywheel ($E$):</div>
        $$E = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\times 12.5 \\times (62.83)^2 = 6.25 \\times 3947.6 = 24,672.5\\text{ J} \\approx 24.67\\text{ kJ}$$
        <p><em>(If rim ring: $E = \\frac{1}{2} \\times 25 \\times 3947.6 = 49.35\\text{ kJ}$)</em></p>
      </div>
    `,
    finalAnswer: "(i) ω = 62.83 rad/s | (ii) I = 12.5 kg·m² (Rim: 25 kg·m²) | (iii) E = 24.67 kJ (Rim: 49.35 kJ)"
  },
  {
    id: "ch1-math-5",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    qNumber: "Ch-1 | Math 5",
    title: "Rotating Body about Z-Axis: Calculate $I_z$ and Planar Value $I_y$",
    tags: ["Dynamics of Rigid Body", "Perpendicular Axes", "Mid Topic 5", "3 Marks"],
    easyDefinition: `
      <strong>Perpendicular Axes Theorem:</strong>
      For a 2D planar object in the $xy$-plane, the moment of inertia about the perpendicular $z$-axis equals the sum of moments about the two perpendicular in-plane axes:
      $$I_z = M r^2, \\quad I_z = I_x + I_y \\implies I_y = I_z - I_x$$
      <span class="mem-hook">💡 Quick Exam Rule: $I_z = I_x + I_y$. To find $I_y$, simply compute $I_z - I_x$.</span>
    `,
    definition: "A rigid body is rotating about the Z-axis of rotation, and the center of mass is at a distance of $4\\text{ cm}$ from that axis of rotation. The total mass of the object is $5\\text{ kg}$. Find (i) the moment of inertia, $I_z$, (ii) If $I_x = 0.005\\text{ kg}\\cdot\\text{m}^2$, find the value of $I_y$.",
    basicIdea: "Convert distance to meters ($4\\text{ cm} = 0.04\\text{ m}$). Compute $I_z = M r^2$. Then apply the perpendicular axes theorem $I_z = I_x + I_y$ to find $I_y = I_z - I_x$.",
    banglaIntuition: "প্রথমে $4\\text{ cm} = 0.04\\text{ m}$ করুন। $I_z = M r^2 = 5 \\times (0.04)^2 = 0.008\\text{ kg}\\cdot\\text{m}^2$। এরপর লম্ব অক্ষ উপপাদ্য $I_z = I_x + I_y$ থেকে $I_y = 0.008 - 0.005 = 0.003\\text{ kg}\\cdot\\text{m}^2$ পাওয়া যায়।",
    importantFormula: "1. $I_z = M r^2$\n2. $I_z = I_x + I_y \\implies I_y = I_z - I_x$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Mass, $M = 5\\text{ kg}$</li>
          <li>Distance from Z-axis, $r = 4\\text{ cm} = 0.04\\text{ m}$</li>
          <li>$I_x = 0.005\\text{ kg}\\cdot\\text{m}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Moment of Inertia $I_z$:</div>
        $$I_z = M r^2 = 5\\text{ kg} \\times (0.04\\text{ m})^2 = 5 \\times 0.0016 = 0.008\\text{ kg}\\cdot\\text{m}^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Value of $I_y$:</div>
        <p>By the Theorem of Perpendicular Axes for a planar lamina:</p>
        $$I_z = I_x + I_y \\implies I_y = I_z - I_x$$
        $$I_y = 0.008\\text{ kg}\\cdot\\text{m}^2 - 0.005\\text{ kg}\\cdot\\text{m}^2 = 0.003\\text{ kg}\\cdot\\text{m}^2$$
      </div>
    `,
    commonMistakes: "Do not use $r=4$ without converting to SI meters ($0.04\\text{ m}$).",
    finalAnswer: "(i) Iz = 0.008 kg·m² | (ii) Iy = 0.003 kg·m²"
  },

  {
    id: "ch2-def-all",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "definition",
    qNumber: "Ch-2 | CLO-1",
    title: "Core Definitions: Newton's Law of Gravitation, Field, Potential, GPE, Kepler's Laws & Escape Velocity",
    tags: ["Gravity & Gravitation", "Definitions", "CLO-1", "Exam Mandatory"],
    easyDefinition: `
      <strong>1. Newton's Law of Gravitation:</strong> Every object attracts every other object with a force $F = G\\frac{m_1 m_2}{r^2}$.<br>
      <strong>2. Gravitational Field ($E$):</strong> The region where gravity is felt. Force per unit mass ($E = F/m = GM/r^2$). Unit: $\\text{N/kg}$ or $\\text{m/s}^2$.<br>
      <strong>3. Gravitational Potential ($V$):</strong> Work done to bring a $1\\text{ kg}$ test mass from infinity to a point ($V = -GM/r$). Unit: $\\text{J/kg}$. (Always negative!).<br>
      <strong>4. Gravitational Potential Energy ($U$):</strong> Work done bringing mass $m$ from infinity to distance $r$ ($U = -GMm/r$). Unit: Joules ($\\text{J}$).<br>
      <strong>5. Kepler's Three Laws:</strong><br>
      &bull; <em>1st Law (Orbits):</em> Planets orbit the Sun in ellipses, with the Sun at one focus.<br>
      &bull; <em>2nd Law (Areas):</em> Equal areas are swept out in equal times (areal speed is constant).<br>
      &bull; <em>3rd Law (Periods):</em> Square of orbital period is proportional to cube of radius ($T^2 \\propto a^3$).<br>
      <strong>6. Escape Velocity ($v_e$):</strong> The minimum speed to shoot an object so it escapes Earth's gravity forever ($v_e = \\sqrt{2GM/R} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$).
      <span class="mem-hook">💡 Teacher's Memory Hook: Potential ($V$) is per $1\\text{ kg}$. Energy ($U$) is for mass $m$. So, $U = m \\times V$.</span>
    `,
    definition: `
      <div class="def-block">
        <strong>1. Newton's Universal Law of Gravitation:</strong> Every particle of matter in the universe attracts every other particle with a central force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres:
        $$F = G \\frac{m_1 m_2}{r^2} \\quad [G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2]$$
        <strong>2. Gravitational Field ($\\vec{E}$):</strong> The region of space surrounding a mass in which another mass experiences gravitational attraction. Field intensity $\\vec{E}$ at a point is the gravitational force exerted per unit positive test mass:
        $$\\vec{E} = \\frac{\\vec{F}}{m} = -\\frac{dV}{dr}\\hat{r} = -\\frac{GM}{r^2}\\hat{r} \\quad [\\text{SI Unit: N/kg or m/s}^2]$$
        <strong>3. Gravitational Potential ($V$):</strong> The work done by an external agent in bringing a unit positive mass from infinity to that point against the gravitational field without acceleration:
        $$V = -\\int_\\infty^r \\vec{E}\\cdot d\\vec{r} = -\\frac{GM}{r} \\quad [\\text{SI Unit: J/kg, Scalar, always } \\le 0]$$
        <strong>4. Gravitational Potential Energy ($U$):</strong> The total work done in assembling a system of masses by bringing mass $m$ from infinity to distance $r$ from mass $M$:
        $$U = m V = -\\frac{GMm}{r} \\quad [\\text{SI Unit: Joules, J}]$$
        <strong>5. Kepler's Three Laws of Planetary Motion (Statements):</strong>
        <ul style="margin-left: 1.5rem; margin-top: 0.3rem;">
          <li><em>1st Law (Law of Orbits):</em> All planets move in elliptical orbits with the Sun located at one of the two foci.</li>
          <li><em>2nd Law (Law of Areas):</em> The radius vector joining the Sun and any planet sweeps out equal areas in equal intervals of time (constant areal velocity: $\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$).</li>
          <li><em>3rd Law (Law of Periods):</em> The square of the orbital period $T$ of a planet is directly proportional to the cube of the semi-major axis $a$ of its elliptical orbit: $T^2 \\propto a^3$ ($T^2 = \\frac{4\\pi^2 a^3}{GM_\\odot}$).</li>
        </ul>
        <strong>6. Escape Velocity ($v_e$):</strong> The minimum initial speed with which a body must be projected vertically upwards from a celestial body's surface to completely overcome its gravitational field:
        $$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\quad [\\text{For Earth: } v_e \\approx 11.2\\text{ km/s}]$$
      </div>
    `,
    basicIdea: "Gravitational potential is zero at infinity ($V_\\infty = 0$) and strictly negative everywhere else because gravity is attractive (the field pulls mass inward spontaneously). Escape velocity occurs when initial kinetic energy $\\frac{1}{2}mv^2$ matches the binding potential energy $\\frac{GMm}{R}$.",
    banglaIntuition: "মহাকর্ষীয় বিভব সর্বদা ঋণাত্মক কারণ অসীমে বিভব শূন্য ধরা হয় এবং আকর্ষণ বলের কারণে কণা কাছে আসলে কাজ সম্পাদিত হয়। মুক্তিবেগ হলো কোনো বস্তুকে পৃথিবীর আকর্ষণ কাটিয়ে চিরতরে মহাশূন্যে পাঠাতে প্রয়োজনীয় সর্বনিম্ন বেগ ($v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$)।",
    importantFormula: "1. $F = G \\frac{m_1 m_2}{r^2}$\n2. $E = \\frac{GM}{r^2}$\n3. $V = -\\frac{GM}{r}$\n4. $U = -\\frac{GMm}{r}$\n5. $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$\n6. $T^2 \\propto a^3$",
    stepByStepSolution: "Definitions verified with units, dimensions, and physical significance.",
    finalAnswer: "All Chapter 2 definitions and Kepler laws verified for CLO-1."
  },
  {
    id: "ch2-theo-shell",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "derivation",
    qNumber: "Ch-2 | Broad 1",
    title: "Gravitational Potential Due to a Spherical Shell: Outside & Inside Points (Proofs)",
    tags: ["Gravity & Gravitation", "Derivation", "CLO-2", "6 Marks"],
    easyDefinition: `
      <strong>Spherical Shell Potential:</strong><br>
      &bull; <em>Outside ($r > R$):</em> Acts as if all mass is concentrated at the center ($V_{out} = -\\frac{GM}{r}$).<br>
      &bull; <em>Inside ($r < R$):</em> Constant everywhere, equal to surface value ($V_{in} = -\\frac{GM}{R}$). Inside field is strictly ZERO ($E_{in} = 0$).
      <span class="mem-hook">💡 Key Exam Rule: Inside a hollow sphere, gravity cancels out completely ($E = 0$), so potential stays completely flat/constant!</span>
    `,
    definition: "Derivation of the gravitational potential produced by a uniform thin spherical shell of mass $M$ and radius $R$ at: (a) an external point ($r > R$) and (b) an internal point ($r < R$).",
    basicIdea: "Slice the spherical shell into elementary concentric rings perpendicular to the axis of symmetry. Integrate elementary potential using the cosine rule transformation $x dx = rR \\sin\\theta d\\theta$.",
    banglaIntuition: "খোলসের বাইরের যেকোনো বিন্দুতে এটি এমন আচরণ করে যেন সমগ্র ভর কেন্দ্রে পুঞ্জীভূত ($V = -\\frac{GM}{r}$)। কিন্তু ভেতরের যেকোনো বিন্দুতে বিভব সর্বত্র ধ্রুবক থাকে ($V = -\\frac{GM}{R}$) এবং ভেতরে কোনো মহাকর্ষ ক্ষেত্র বা বল থাকে না ($E = 0$)।",
    importantFormula: "1. Outside ($r > R$): $V_{out} = -\\frac{GM}{r}$\n2. Inside ($r < R$): $V_{in} = -\\frac{GM}{R} = \\text{Constant} \\implies E_{in} = -\\frac{dV}{dr} = 0$",
    proof: `
      <h4>Derivation Step-by-Step:</h4>
      <p>Consider a uniform thin spherical shell of mass $M$, radius $R$, surface mass density $\\rho = \\frac{M}{4\\pi R^2}$, and center $O$. Let $P$ be a point at distance $OP = r$.</p>
      <p>Construct an elementary ring between angles $\\theta$ and $\\theta + d\\theta$ with respect to line $OP$.</p>
      <ul>
        <li>Radius of ring = $R \\sin\\theta$</li>
        <li>Width of ring = $R d\\theta$</li>
        <li>Area of ring = $(2\\pi R \\sin\\theta)(R d\\theta) = 2\\pi R^2 \\sin\\theta d\\theta$</li>
        <li>Mass of ring element, $dm = 2\\pi R^2 \\rho \\sin\\theta d\\theta$</li>
      </ul>
      <p>Every point of this ring is at distance $x$ from $P$. Potential $dV$ at $P$ is:</p>
      $$dV = -\\frac{G dm}{x} = -\\frac{2\\pi G R^2 \\rho \\sin\\theta d\\theta}{x} \\quad \\dots (1)$$
      <p>From $\\triangle OAP$, by cosine law: $x^2 = R^2 + r^2 - 2rR \\cos\\theta$.</p>
      <p>Differentiating: $2x dx = 2rR \\sin\\theta d\\theta \\implies \\sin\\theta d\\theta = \\frac{x dx}{rR}$.</p>
      <p>Substituting into equation (1):</p>
      $$dV = -\\left[ \\frac{2\\pi G R^2 \\rho}{x} \\right] \\left[ \\frac{x dx}{rR} \\right] = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) dx$$

      <hr style="margin:1rem 0; border:0; border-top:1px solid var(--border-glass);">

      <h4>(a) At a Point OUTSIDE the Shell ($r > R$):</h4>
      <p>Limits of $x$ are from $(r - R)$ to $(r + R)$:</p>
      $$V = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) \\int_{r - R}^{r + R} dx = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) [(r + R) - (r - R)] = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) [2R]$$
      $$V = -\\frac{4\\pi R^2 \\rho G}{r}$$
      <p>Since the surface area $4\\pi R^2 \\rho = M$ (mass of shell):</p>
      $$V_{outside} = -\\frac{GM}{r} \\quad \\blacksquare \\text{ [PROVED]}$$
      <p><strong>Conclusion:</strong> The shell behaves as if its entire mass were concentrated at its geometric center.</p>

      <hr style="margin:1rem 0; border:0; border-top:1px solid var(--border-glass);">

      <h4>(b) At a Point INSIDE the Shell ($r < R$):</h4>
      <p>Limits of $x$ are from $(R - r)$ to $(R + r)$:</p>
      $$V = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) \\int_{R - r}^{R + r} dx = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) [(R + r) - (R - r)] = -\\left( \\frac{2\\pi G R \\rho}{r} \\right) [2r]$$
      $$V = -4\\pi G R \\rho$$
      <p>Multiplying and dividing by $R$:</p>
      $$V = -\\frac{4\\pi R^2 \\rho G}{R} = -\\frac{GM}{R}$$
      $$V_{inside} = -\\frac{GM}{R} = \\text{Constant} \\quad \\blacksquare \\text{ [PROVED]}$$
      <p><strong>Conclusion:</strong> $V$ is uniform throughout the internal cavity, equal to the surface potential. The internal field intensity is $E = -\\frac{dV}{dr} = 0$.</p>
    `,
    stepByStepSolution: "Derivations completed with full integral evaluations for both regions.",
    finalAnswer: "Outside: V = -GM/r | Inside: V = -GM/R = Constant (E = 0)"
  },
  {
    id: "ch2-theo-pendulum",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "derivation",
    qNumber: "Ch-2 | Broad 2",
    title: "Derive an Equation for the Time Period of a Compound Pendulum ($T = 2\\pi \\sqrt{\\frac{K^2+l^2}{gl}}$)",
    tags: ["Gravity & Gravitation", "Derivation", "CLO-2", "6 Marks"],
    easyDefinition: `
      <strong>Compound Pendulum:</strong> Any rigid body swinging freely about a horizontal axis under gravity. Time period: $T = 2\\pi \\sqrt{\\frac{K^2 + l^2}{gl}} = 2\\pi \\sqrt{\\frac{L_{eq}}{g}}$.
      <span class="mem-hook">💡 Direct Memory Hook: Same as simple pendulum $T = 2\\pi\\sqrt{L/g}$, with equivalent length $L_{eq} = \\frac{K^2}{l} + l$.</span>
    `,
    definition: "A compound pendulum is an extended rigid body oscillating about a horizontal axis passing through suspension point $S$.",
    basicIdea: "Displacing the pendulum by small angle $\\theta$ creates restoring torque $\\tau = -Mgl\\sin\\theta \\approx -Mgl\\theta$. Setting $I\\frac{d^2\\theta}{dt^2} + Mgl\\theta = 0$ and applying $I = M(K^2+l^2)$ yields SHM time period.",
    banglaIntuition: "যৌগিক দোলকে ঝুলন বিন্দু $S$ ও ভরকেন্দ্র $G$-এর দূরত্ব $l$। সমান্তরাল অক্ষ উপপাদ্য প্রয়োগ করলে $I = M(K^2+l^2)$। কৌণিক সরল ছন্দিত স্পন্দনের সমীকরণ থেকে দোলনকাল দাঁড়ায় $T = 2\\pi\\sqrt{\\frac{K^2+l^2}{gl}}$।",
    importantFormula: "1. $\\tau = -M g l \\sin\\theta \\approx -M g l \\theta$\n2. $I = M(K^2 + l^2)$\n3. $T = 2\\pi \\sqrt{\\frac{K^2 + l^2}{gl}} = 2\\pi \\sqrt{\\frac{L_{eq}}{g}}$",
    proof: `
      <h4>Derivation Step-by-Step:</h4>
      <p><strong>Step 1: System Geometry:</strong> Let a rigid body of mass $M$ oscillate about a horizontal axis through suspension point $S$. Let $G$ be the center of gravity, with distance $SG = l$.</p>
      
      <p><strong>Step 2: Restoring Torque:</strong> When displaced by small angle $\\theta$, downward force $Mg$ acts at $G$. Restoring torque about $S$ is:</p>
      $$\\tau = -M g l \\sin\\theta \\approx -M g l \\theta \\quad (\\text{for small } \\theta)$$

      <p><strong>Step 3: Rotational Dynamics:</strong></p>
      $$I \\frac{d^2\\theta}{dt^2} = -M g l \\theta \\implies I \\frac{d^2\\theta}{dt^2} + M g l \\theta = 0 \\quad \\dots (1)$$

      <p><strong>Step 4: Parallel Axis Theorem:</strong> By parallel axis theorem, $I = M K^2 + M l^2 = M(K^2 + l^2)$, where $K$ is the radius of gyration about $G$:</p>
      $$M(K^2 + l^2) \\frac{d^2\\theta}{dt^2} + M g l \\theta = 0$$
      $$\\frac{d^2\\theta}{dt^2} + \\left[ \\frac{g l}{K^2 + l^2} \\right] \\theta = 0 \\quad \\dots (2)$$

      <p><strong>Step 5: Compare with Standard SHM:</strong> Comparing with $\\frac{d^2\\theta}{dt^2} + \\omega^2 \\theta = 0$:</p>
      $$\\omega^2 = \\frac{g l}{K^2 + l^2} \\implies \\omega = \\sqrt{\\frac{g l}{K^2 + l^2}}$$
      $$T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{K^2 + l^2}{gl}} = 2\\pi \\sqrt{\\frac{K^2/l + l}{g}} = 2\\pi \\sqrt{\\frac{L}{g}} \\quad \\blacksquare \\text{ [PROVED]}$$
      <p>Here $L = \\frac{K^2}{l} + l$ is the equivalent length of a simple pendulum.</p>
    `,
    stepByStepSolution: "Derivation verified with restoring torque, parallel axis theorem, and SHM frequency.",
    finalAnswer: "T = 2π √[(K² + l²) / (gl)] (Proved)"
  },
  {
    id: "ch2-math-1",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 1",
    title: "Mass $5\\text{ kg}$ at $200\\text{ cm}$ Outside Sphere of Radius $110\\text{ cm}$: Potential & GPE",
    tags: ["Gravity & Gravitation", "Numerical", "Mid Topic 1", "3 Marks"],
    easyDefinition: `
      <strong>External Potential & Energy of a Sphere:</strong>
      For a point outside a sphere ($r > R$), potential is $V = -\\frac{GM}{r}$ and potential energy is $U = mV$:
      $$V = -\\frac{GM}{r}, \\quad U = m V = -\\frac{GMm}{r}$$
      <span class="mem-hook">💡 Quick Exam Rule: Potential $V$ is per $1\\text{ kg}$; multiply $V$ by mass $m$ to get total energy $U$.</span>
    `,
    definition: "If an object of mass $5\\text{ kg}$ is situated at a distance of $200\\text{ cm}$ from the center of a sphere of radius $110\\text{ cm}$, determine the value of (i) the gravitational potential and (ii) the gravitational potential energy (GPE). [The sphere has a mass of $100\\text{ kg}$]",
    basicIdea: "Distance $r = 200\\text{ cm} = 2.0\\text{ m} > R = 1.1\\text{ m}$, so this is an external point. Potential is $V = -GM/r$, and GPE is $U = mV$.",
    banglaIntuition: "দূরত্ব $r = 2.0\\text{ m}$ গোলকের ব্যাসার্ধ $1.1\\text{ m}$-এর চেয়ে বড়, অর্থাৎ বিন্দুটি বাইরে। বিভব $V = -\\frac{GM}{r} = -3.34 \\times 10^{-9}\\text{ J/kg}$ এবং বিভব শক্তি $U = mV = -1.67 \\times 10^{-8}\\text{ J}$।",
    importantFormula: "1. $V = -\\frac{GM}{r}$\n2. $U = m V = -\\frac{GMm}{r}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Mass of sphere, $M = 100\\text{ kg}$</li>
          <li>Radius of sphere, $R = 110\\text{ cm} = 1.1\\text{ m}$</li>
          <li>Distance from center, $r = 200\\text{ cm} = 2.0\\text{ m}$ (external point, $r > R$)</li>
          <li>Mass of object, $m = 5\\text{ kg}$</li>
          <li>$G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Gravitational Potential ($V$):</div>
        $$V = -\\frac{G \\times M}{r} = -\\frac{6.67 \\times 10^{-11} \\times 100}{2.0} = -\\frac{6.67 \\times 10^{-9}}{2.0} = -3.335 \\times 10^{-9}\\text{ J/kg} \\approx -3.34 \\times 10^{-9}\\text{ J/kg}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Gravitational Potential Energy ($U$):</div>
        $$U = m \\times V = 5\\text{ kg} \\times (-3.335 \\times 10^{-9}\\text{ J/kg}) = -1.6675 \\times 10^{-8}\\text{ Joules} \\approx -1.67 \\times 10^{-8}\\text{ J}$$
      </div>
    `,
    finalAnswer: "(i) Potential V = -3.34 × 10⁻⁹ J/kg | (ii) GPE = -1.67 × 10⁻⁸ J"
  },
  {
    id: "ch2-math-2",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 2",
    title: "Escape Velocity of a Body from Earth's Gravitational Field",
    tags: ["Gravity & Gravitation", "Escape Velocity", "Mid Topic 2", "3 Marks"],
    easyDefinition: `
      <strong>Escape Velocity ($v_e$):</strong>
      The minimum initial projection speed required to completely escape a celestial body's gravitational pull:
      $$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$$
      <span class="mem-hook">💡 Quick Exam Rule: Set kinetic energy equal to binding potential energy: $\\frac{1}{2}mv_e^2 = \\frac{GMm}{R} \\implies v_e = \\sqrt{2GM/R}$.</span>
    `,
    definition: "If a body is projected in such a way that it escapes the Earth's gravitational field, find the required velocity of that body. [Given: $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, $M = 6 \\times 10^{24}\\text{ kg}$, $R = 6 \\times 10^6\\text{ m}$]",
    basicIdea: "Use $v_e = \\sqrt{\\frac{2GM}{R}}$ using the exact values prescribed by the question sheet.",
    banglaIntuition: "প্রশ্নে প্রদত্ত মানগুলো সরাসরি সূত্রে বসালে $v_e = \\sqrt{\\frac{2GM}{R}} = 11.55\\text{ km/s}$ পাওয়া যায়। (সাধারণ মান ব্যবহার করলে তা ১১.২ কিমি/সেকেন্ড)।",
    importantFormula: "$v_e = \\sqrt{\\frac{2GM}{R}}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>$G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
          <li>Mass of Earth, $M = 6 \\times 10^{24}\\text{ kg}$</li>
          <li>Radius of Earth, $R = 6 \\times 10^6\\text{ m}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$v_e = \\sqrt{\\frac{2 \\times G \\times M}{R}} = \\sqrt{\\frac{2 \\times (6.67 \\times 10^{-11}) \\times (6 \\times 10^{24})}{6 \\times 10^6}}$$
        $$v_e = \\sqrt{2 \\times 6.67 \\times 10^{-11} \\times 10^{18}} = \\sqrt{13.34 \\times 10^7} = \\sqrt{1.334 \\times 10^8} \\approx 11,549.9\\text{ m/s} = 11.55\\text{ km/s}$$
      </div>
    `,
    finalAnswer: "Escape velocity ve = 11.55 km/s (or 11,550 m/s)"
  },
  {
    id: "ch2-math-3",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 3",
    title: "Gravitational Potential with Respect to the Sun at the Position of the Earth",
    tags: ["Gravity & Gravitation", "Numerical", "Mid Topic 3", "3 Marks"],
    easyDefinition: `
      <strong>Sun's Gravitational Potential at Orbiting Planet:</strong>
      Potential at a distance $r$ depends strictly on the central source mass ($M_s$) and distance, not on the planet's mass:
      $$V = -\\frac{G M_s}{r}$$
      <span class="mem-hook">💡 Quick Exam Rule: Planet mass is irrelevant! Convert distance from km to m ($150\\times 10^6\\text{ km} = 1.5\\times 10^{11}\\text{ m}$).</span>
    `,
    definition: "What is the gravitational potential with respect to the Sun at the position of the Earth? The mass of the Sun is $1.99 \\times 10^{30}\\text{ kg}$, and the mass of the Earth is $5.98 \\times 10^{24}\\text{ kg}$. The mean Earth-Sun distance is $150 \\times 10^6\\text{ km}$.",
    basicIdea: "Potential depends only on the Sun's mass $M_s$ and orbital distance $r$. Earth's mass is unneeded. Convert distance $150 \\times 10^6\\text{ km} = 1.50 \\times 10^{11}\\text{ m}$.",
    banglaIntuition: "সূর্যের সাপেক্ষে বিভব বের করার জন্য কেবল সূর্যের ভর এবং মধ্যবর্তী দূরত্বকে মিটারে ($1.50 \\times 10^{11}\\text{ m}$) নিতে হবে। পৃথিবীর ভরের কোনো ভূমিকা নেই।",
    importantFormula: "$V = -\\frac{G M_{Sun}}{r}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Mass of Sun, $M_s = 1.99 \\times 10^{30}\\text{ kg}$</li>
          <li>Distance, $r = 150 \\times 10^6\\text{ km} = 150 \\times 10^9\\text{ m} = 1.50 \\times 10^{11}\\text{ m}$</li>
          <li>$G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$V = -\\frac{G \\times M_s}{r} = -\\frac{6.67 \\times 10^{-11} \\times 1.99 \\times 10^{30}}{1.50 \\times 10^{11}}$$
        $$V = -\\frac{13.2733 \\times 10^{19}}{1.50 \\times 10^{11}} = -8.849 \\times 10^8\\text{ J/kg} \\approx -8.85 \\times 10^8\\text{ J/kg}$$
      </div>
    `,
    finalAnswer: "Gravitational potential V = -8.85 × 10⁸ J/kg"
  },
  {
    id: "ch2-math-4",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 4",
    title: "Gravitational Attraction Between Two $90\\text{ kg}$ Metal Spheres at $10^3\\text{ m}$ & Moon Comparison",
    tags: ["Gravity & Gravitation", "Numerical", "Mid Topic 4", "3 Marks"],
    easyDefinition: `
      <strong>Newton's Gravitational Force & Universal Invariance:</strong>
      The mutual attraction between two bodies depends only on $G$, masses, and distance:
      $$F = G \\frac{m_1 m_2}{r^2}$$
      <span class="mem-hook">💡 Quick Exam Rule: Taking the objects to the Moon changes NOTHING about their mutual attraction! Force is unchanged.</span>
    `,
    definition: "Calculate the gravitational force of attraction between two metal spheres, each of mass $90\\text{ kg}$, if the distance between their centres is $10^3\\text{ m}$. Given $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$. Will the force of attraction be different if the same bodies are taken to the Moon, with their separation remaining the same?",
    basicIdea: "Use $F = G m_1 m_2 / r^2$. The force on the Moon remains 100% identical because $G$, masses, and distance are all invariant.",
    banglaIntuition: "মহাকর্ষ বল $F = 5.40 \\times 10^{-13}\\text{ N}$। চাঁদে নিয়ে গেলেও বল অপরিবর্তিত থাকবে কারণ $G$, ভর এবং দূরত্ব কোনোটিই স্থান পরিবর্তনের ওপর নির্ভর করে না।",
    importantFormula: "$F = G \\frac{m_1 m_2}{r^2}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$F = \\frac{6.67 \\times 10^{-11} \\times 90 \\times 90}{(10^3)^2} = \\frac{6.67 \\times 10^{-11} \\times 8100}{10^6} = \\frac{5.4027 \\times 10^{-7}}{10^6} = 5.40 \\times 10^{-13}\\text{ N}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Evaluation on the Moon:</div>
        <p><strong>Answer: NO, the force will NOT be different on the Moon.</strong></p>
        <p><em>Reasoning:</em> Mutual gravitational force depends strictly on universal gravitational constant $G$, masses $m_1, m_2$, and distance $r$. Because none of these change, the mutual attraction remains strictly $5.40 \\times 10^{-13}\\text{ N}$.</p>
      </div>
    `,
    finalAnswer: "F = 5.40 × 10⁻¹³ N | No, the force will NOT be different on the Moon."
  },
  {
    id: "ch2-math-5",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 5",
    title: "Two Particles $1.0\\text{ kg}$ and $2.0\\text{ kg}$ at $50\\text{ cm}$: Mutual Force & Initial Accelerations",
    tags: ["Gravity & Gravitation", "Numerical", "Mid Topic 5", "3 Marks"],
    easyDefinition: `
      <strong>Mutual Gravitational Force & Acceleration:</strong>
      Two masses experience equal and opposite gravitational attraction ($F = G\\frac{m_1 m_2}{r^2}$), producing accelerations inversely proportional to their masses:
      $$F = G\\frac{m_1 m_2}{r^2}, \\quad a_1 = \\frac{F}{m_1}, \\quad a_2 = \\frac{F}{m_2}$$
      <span class="mem-hook">💡 Quick Exam Rule: Force is identical on both particles. Lighter body accelerates twice as fast as the heavier one!</span>
    `,
    definition: "Two particles of masses $1.0\\text{ kg}$ and $2.0\\text{ kg}$ are placed at a separation of $50\\text{ cm}$. Assuming that the only forces acting on the particles are their mutual gravitation, find the initial accelerations of the two particles.",
    basicIdea: "Find mutual force $F = G m_1 m_2 / r^2$. By Newton's second law, accelerations are $a_1 = F / m_1$ and $a_2 = F / m_2$.",
    banglaIntuition: "দুই কণার পারস্পরিক আকর্ষণ বল $F = 5.34 \\times 10^{-10}\\text{ N}$। ভর দিয়ে ভাগ করলে ১ম কণার ত্বরণ $a_1 = 5.34 \\times 10^{-10}\\text{ m/s}^2$ এবং ২য় কণার ত্বরণ $a_2 = 2.67 \\times 10^{-10}\\text{ m/s}^2$।",
    importantFormula: "1. $F = G \\frac{m_1 m_2}{r^2}$\n2. $a_1 = \\frac{F}{m_1}, \\quad a_2 = \\frac{F}{m_2}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 1: Mutual Gravitational Force:</div>
        $$r = 50\\text{ cm} = 0.50\\text{ m}$$
        $$F = \\frac{6.67 \\times 10^{-11} \\times 1.0 \\times 2.0}{(0.50)^2} = \\frac{1.334 \\times 10^{-10}}{0.25} = 5.336 \\times 10^{-10}\\text{ N} \\approx 5.34 \\times 10^{-10}\\text{ N}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 2: Accelerations of the Particles:</div>
        $$a_1 = \\frac{F}{m_1} = \\frac{5.336 \\times 10^{-10}\\text{ N}}{1.0\\text{ kg}} = 5.34 \\times 10^{-10}\\text{ m/s}^2$$
        $$a_2 = \\frac{F}{m_2} = \\frac{5.336 \\times 10^{-10}\\text{ N}}{2.0\\text{ kg}} = 2.67 \\times 10^{-10}\\text{ m/s}^2$$
      </div>
    `,
    finalAnswer: "a₁ = 5.34 × 10⁻¹⁰ m/s² | a₂ = 2.67 × 10⁻¹⁰ m/s²"
  },
  {
    id: "ch2-math-6",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 6",
    title: "Escape Velocity from the Moon ($M = 7.4 \\times 10^{22}\\text{ kg}$, $R = 1740\\text{ km}$)",
    tags: ["Gravity & Gravitation", "Escape Velocity", "Mid Topic 6", "3 Marks"],
    easyDefinition: `
      <strong>Escape Velocity from the Moon:</strong>
      Because the Moon has much smaller mass and radius than Earth, its escape velocity is much lower:
      $$v_e = \\sqrt{\\frac{2GM_{Moon}}{R_{Moon}}} \\approx 2.38\\text{ km/s}$$
      <span class="mem-hook">💡 Quick Exam Rule: Moon's escape speed is only $2.38\\text{ km/s}$ (about $1/5$th of Earth's), explaining why it cannot hold an atmosphere.</span>
    `,
    definition: "Calculate the escape velocity from the Moon. The mass of the Moon $= 7.4 \\times 10^{22}\\text{ kg}$ and the radius of the Moon $= 1740\\text{ km}$.",
    basicIdea: "Convert radius to meters: $R = 1740\\text{ km} = 1.74 \\times 10^6\\text{ m}$. Compute $v_e = \\sqrt{2GM/R}$.",
    banglaIntuition: "চাঁদের ব্যাসার্ধ $1.74 \\times 10^6\\text{ m}$। চাঁদের মুক্তিবেগ পৃথিবীর ($11.2\\text{ km/s}$) তুলনায় অনেক কম—মাত্র $2.38\\text{ km/s}$, যার কারণে চাঁদে কোনো বায়ুমণ্ডল টিকে থাকতে পারে না।",
    importantFormula: "$v_e = \\sqrt{\\frac{2GM}{R}}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$R = 1740\\text{ km} = 1.74 \\times 10^6\\text{ m}$$
        $$v_e = \\sqrt{\\frac{2 \\times 6.67 \\times 10^{-11} \\times 7.4 \\times 10^{22}}{1.74 \\times 10^6}} = \\sqrt{\\frac{9.8716 \\times 10^{12}}{1.74 \\times 10^6}} = \\sqrt{5.6733 \\times 10^6}$$
        $$v_e \\approx 2381.9\\text{ m/s} = 2.38\\text{ km/s} \\quad (\\text{or } 2382\\text{ m/s})$$
      </div>
    `,
    finalAnswer: "Escape velocity from Moon ve = 2.38 km/s (or 2382 m/s)"
  },
  {
    id: "ch2-math-7",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 7",
    title: "Zero Resultant Gravitational Field Point Between Earth and Moon",
    tags: ["Gravity & Gravitation", "Neutral Point", "Mid Topic 7", "3 Marks"],
    easyDefinition: `
      <strong>Neutral Point (Zero Gravitational Field):</strong>
      The point between Earth and Moon where their gravitational pulls are exactly equal in magnitude and cancel out:
      $$\\frac{G M_E}{x^2} = \\frac{G M_M}{(d - x)^2} \\implies \\frac{d - x}{x} = \\sqrt{\\frac{M_M}{M_E}}$$
      <span class="mem-hook">💡 Quick Exam Rule: Equate forces and take square roots of both sides immediately to solve for $x$ without solving a quadratic!</span>
    `,
    definition: "Find the distance of a point from the Earth’s centre where the resultant gravitational field due to the Earth and the Moon is zero. Mass of Earth is $6.0 \\times 10^{24}\\text{ kg}$, Moon mass is $7.4 \\times 10^{22}\\text{ kg}$, and Earth-Moon separation is $4.0 \\times 10^5\\text{ km}$.",
    basicIdea: "At the neutral point, gravitational pulls cancel: $G M_E / x^2 = G M_M / (d - x)^2$. Taking square roots simplifies the quadratic directly.",
    banglaIntuition: "নিরপেক্ষ বিন্দুতে পৃথিবীর টান ও চাঁদের টান পরস্পর সমান ও বিপরীত। দূরত্ব $x$ ধরলে $\\frac{d-x}{x} = \\sqrt{\\frac{M_M}{M_E}} = 0.111$। সমাধান করলে পৃথিবী থেকে দূরত্ব দাঁড়ায় $3.60 \\times 10^5\\text{ km}$।",
    importantFormula: "$\\frac{G M_E}{x^2} = \\frac{G M_M}{(d - x)^2} \\implies \\frac{d - x}{x} = \\sqrt{\\frac{M_M}{M_E}}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        <p>Let $x$ be the distance from Earth's center. Distance from Moon is $(d - x)$.</p>
        $$\\frac{G M_E}{x^2} = \\frac{G M_M}{(d - x)^2} \\implies \\frac{d - x}{x} = \\sqrt{\\frac{M_M}{M_E}} = \\sqrt{\\frac{7.4 \\times 10^{22}}{6.0 \\times 10^{24}}} = \\sqrt{0.012333} \\approx 0.111055$$
        $$\\frac{d}{x} - 1 = 0.111055 \\implies \\frac{d}{x} = 1.111055$$
        $$x = \\frac{d}{1.111055} = \\frac{4.0 \\times 10^5\\text{ km}}{1.111055} \\approx 3.60 \\times 10^5\\text{ km} = 3.60 \\times 10^8\\text{ m}$$
      </div>
    `,
    finalAnswer: "Distance from Earth's center x = 3.60 × 10⁵ km (or 3.60 × 10⁸ m)"
  },
  {
    id: "ch2-math-8",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 8",
    title: "Four Masses ($m, 2m, 3m, 4m$) on Corners of a Square: Net Gravitational Force at Center",
    tags: ["Gravity & Gravitation", "Vector Superposition", "Mid Topic 8", "3 Marks"],
    easyDefinition: `
      <strong>Gravitational Superposition on Square Diagonals:</strong>
      Opposite corner masses ($3m - m = 2m$ and $4m - 2m = 2m$) leave equal net forces along perpendicular diagonals ($90^\\circ$):
      $$F_{net} = \\sqrt{(2F_0)^2 + (2F_0)^2} = 2\\sqrt{2} F_0 = 4\\sqrt{2} \\frac{G m^2}{a^2} \\approx 5.66 \\frac{G m^2}{a^2}$$
      <span class="mem-hook">💡 Quick Exam Rule: Corner distance is $r = a/\\sqrt{2}$. Opposites subtract to $2F_0$ per diagonal, resultant is $2\\sqrt{2}F_0 = 4\\sqrt{2}Gm^2/a^2$.</span>
    `,
    definition: "Four particles having masses $m, 2m, 3m$ and $4m$ are placed at the four corners of a square of edge $a$. Find the gravitational force acting on a particle of mass $m$ placed at the centre.",
    basicIdea: "Distance from center to any corner is $r = a / \\sqrt{2} \\implies r^2 = a^2 / 2$. Base force is $F_0 = 2Gm^2 / a^2$. Opposing corners along diagonals cancel partially leaving $2F_0$ along each diagonal. Because diagonals are perpendicular, $F_{net} = \\sqrt{(2F_0)^2 + (2F_0)^2} = 2\\sqrt{2} F_0$.",
    banglaIntuition: "কর্ণের মধ্যবর্তী দূরত্ব $r = a/\\sqrt{2}$। বিপরীত কোণার ভরগুলোর বিয়োগফল প্রতিটি কর্ণে $2F_0$ দেয়। কর্ণদ্বয় পরস্পর সমকোণে ($90^\\circ$) থাকায় পিথাগোরাসের উপপাদ্যে লব্ধি বল দাঁড়ায় $2\\sqrt{2} F_0 = 4\\sqrt{2}\\frac{Gm^2}{a^2} \\approx 5.66\\frac{Gm^2}{a^2}$।",
    importantFormula: "$F_0 = \\frac{2 G m^2}{a^2} \\implies F_{net} = \\sqrt{(2F_0)^2 + (2F_0)^2} = 4\\sqrt{2} \\frac{G m^2}{a^2}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 1: Geometry & Corner Distance:</div>
        <p>Corners in order: $A(m), B(2m), C(3m), D(4m)$. Central mass = $m$.</p>
        $$r = \\frac{a}{\\sqrt{2}} \\implies r^2 = \\frac{a^2}{2}$$
        $$F_0 = \\frac{G m \\cdot m}{r^2} = \\frac{G m^2}{a^2 / 2} = \\frac{2 G m^2}{a^2}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 2: Vector Cancellation along Diagonals:</div>
        <p>Along diagonal $AC$: $F_1 = 3F_0 - F_0 = 2F_0$ (directed toward $C$).</p>
        <p>Along diagonal $BD$: $F_2 = 4F_0 - 2F_0 = 2F_0$ (directed toward $D$).</p>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 3: Resultant Vector Sum:</div>
        <p>Since diagonals of a square intersect at $90^\\circ$:</p>
        $$F_{net} = \\sqrt{(2F_0)^2 + (2F_0)^2} = \\sqrt{4F_0^2 + 4F_0^2} = \\sqrt{8F_0^2} = 2\\sqrt{2} F_0$$
        $$F_{net} = 2\\sqrt{2} \\left( \\frac{2 G m^2}{a^2} \\right) = 4\\sqrt{2} \\left( \\frac{G m^2}{a^2} \\right) \\approx 5.66 \\left( \\frac{G m^2}{a^2} \\right)$$
      </div>
    `,
    finalAnswer: "Net force F = 4√2 (G m² / a²) ≈ 5.66 (G m² / a²)"
  },
  {
    id: "ch2-math-9",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    qNumber: "Ch-2 | Math 9",
    title: "Acceleration Due to Gravity of Moon at $1000\\text{ km}$ Above Surface",
    tags: ["Gravity & Gravitation", "Numerical", "Mid Topic 9", "3 Marks"],
    easyDefinition: `
      <strong>Gravity at Altitude ($h$) Above Surface:</strong>
      Acceleration due to gravity drops with the square of the total radial distance from center ($r = R + h$):
      $$g' = \\frac{G M}{(R + h)^2}$$
      <span class="mem-hook">💡 Quick Exam Rule: Add altitude to radius: $r = R + h = 1740 + 1000 = 2740\\text{ km} = 2.74 \\times 10^6\\text{ m}$.</span>
    `,
    definition: "Find the acceleration due to gravity of the moon at a point $1000\\text{ km}$ above the moon’s surface. Mass of Moon is $7.4 \\times 10^{22}\\text{ kg}$, and radius is $1740\\text{ km}$.",
    basicIdea: "Effective orbital radius from center is $r = R + h = 1740 + 1000 = 2740\\text{ km} = 2.74 \\times 10^6\\text{ m}$. Compute $g' = G M / r^2$.",
    banglaIntuition: "চাঁদের পৃষ্ঠ থেকে $1000\\text{ km}$ উচ্চতায় কেন্দ্র থেকে মোট দূরত্ব $r = 1740 + 1000 = 2740\\text{ km} = 2.74 \\times 10^6\\text{ m}$। উচ্চতায় অভিকর্ষজ ত্বরণ $g' = \\frac{GM}{r^2} = 0.657\\text{ m/s}^2$।",
    importantFormula: "$g' = \\frac{G M}{(R + h)^2}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        <ul>
          <li>$M = 7.4 \\times 10^{22}\\text{ kg}$</li>
          <li>$r = R + h = 1740\\text{ km} + 1000\\text{ km} = 2740\\text{ km} = 2.74 \\times 10^6\\text{ m}$</li>
          <li>$G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        </ul>
        $$g' = \\frac{G \\times M}{r^2} = \\frac{6.67 \\times 10^{-11} \\times 7.4 \\times 10^{22}}{(2.74 \\times 10^6)^2} = \\frac{4.9358 \\times 10^{12}}{7.5076 \\times 10^{12}} \\approx 0.657\\text{ m/s}^2$$
      </div>
    `,
    finalAnswer: "Acceleration due to gravity g' = 0.657 m/s²"
  },

  {
    id: "ch3-def-all",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "definition",
    qNumber: "Ch-3 | CLO-1",
    title: "Core Definitions: Wave Function, Born Probability Density, Expectation Value & Uncertainty Principle",
    tags: ["Quantum Mechanics", "Definitions", "CLO-1", "Exam Mandatory"],
    easyDefinition: `
      <strong>1. Wave Function ($\\Psi$):</strong> A mathematical matter-wave associated with a moving particle that completely describes its quantum state.<br>
      <strong>2. Born's Probability Density ($|\\Psi|^2$):</strong> The absolute square of the wave function gives the probability of finding the particle at a given point ($P = |\\Psi|^2 dx$). Real and non-negative.<br>
      <strong>3. Expectation Value ($\\langle Q \\rangle$):</strong> The statistical average of many identical measurements of an observable quantity: $\\langle Q \\rangle = \\int \\Psi^* \\hat{Q} \\Psi dx$.<br>
      <strong>4. Heisenberg's Uncertainty Principle:</strong> It is fundamentally impossible to simultaneously know both the exact position and exact momentum of a subatomic particle: $\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$.<br>
      <strong>5. Acceptable Wave Function Properties (F-S-C-S-B):</strong><br>
      &bull; <em>Finite:</em> Value cannot be infinite.<br>
      &bull; <em>Single-valued:</em> Exactly one value at each point.<br>
      &bull; <em>Continuous:</em> Smooth curve without breaks.<br>
      &bull; <em>Smooth derivative:</em> First derivative must be continuous.<br>
      &bull; <em>Boundary:</em> Must drop to zero at infinite boundaries.
      <span class="mem-hook">💡 Teacher's Memory Hook: $\\Psi$ is an imaginary wave, but $|\Psi|^2$ is real probability!</span>
    `,
    definition: `
      <div class="def-block">
        <strong>1. Wave Function ($\\Psi$):</strong> A complex-valued mathematical function associated with a moving matter particle that completely describes its quantum state in space and time:
        $$\\Psi(\\vec{r}, t) \\quad \\text{with normalization: } \\int_{-\\infty}^{\\infty} |\\Psi|^2 d^3r = 1$$
        <strong>2. Born's Statistical Probability Density ($|\\Psi|^2$):</strong> Formulated by Max Born, although the wave function $\\Psi$ is complex and unobservable directly, its squared modulus $|\\Psi|^2 = \\Psi^* \\Psi$ is strictly real and non-negative. It represents the probability density of discovering the particle at position $x$ at time $t$. The probability of finding the particle in differential width $dx$ is:
        $$P(x) dx = |\\Psi(x, t)|^2 dx$$
        <strong>3. The Expectation Value ($\\langle Q \\rangle$):</strong> The mathematical expectation or ensemble average of the outcomes of a large number of independent measurements of an observable quantity $Q$ on identical quantum systems:
        $$\\langle Q \\rangle = \\frac{\\int \\Psi^* \\hat{Q} \\Psi dx}{\\int \\Psi^* \\Psi dx} = \\int \\Psi^* \\hat{Q} \\Psi dx \\quad (\\text{for normalized } \\Psi)$$
        <strong>4. Heisenberg's Uncertainty Principle:</strong> It is fundamentally impossible to simultaneously determine both the exact position and exact momentum (or velocity) of a particle with infinite precision:
        $$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2} \\quad \\left( \\hbar = \\frac{h}{2\\pi} \\approx 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s} \\right)$$
        $$\\Delta x \\cdot \\Delta v \\ge \\frac{\\hbar}{2m}, \\quad \\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$$
        <strong>5. Necessary Properties of an Acceptable Wave Function (F-S-C-S-B):</strong>
        <ol style="margin-left: 1.5rem; margin-top: 0.3rem;">
          <li><em>Finite:</em> $\\Psi$ must be finite everywhere; otherwise probability $|\\Psi|^2$ would blow up to infinity.</li>
          <li><em>Single-valued:</em> At each spatial point, $\\Psi$ must have only one unique value (a particle cannot have multiple probabilities at one location).</li>
          <li><em>Continuous:</em> $\\Psi$ must vary smoothly across all space except where potential energy is infinite.</li>
          <li><em>Smooth First Derivative:</em> $\\frac{\\partial \\Psi}{\\partial x}$ must be continuous everywhere so momentum and kinetic energy operators remain physically defined.</li>
          <li><em>Vanishes at Boundary:</em> A bound physical particle cannot escape to infinity, so $\\Psi \\to 0$ as $r \\to \\infty$.</li>
        </ol>
      </div>
    `,
    basicIdea: "Classical mechanics is deterministic (position and velocity are always simultaneously knowable). Quantum mechanics is probabilistic. For subatomic particles with microscopic mass, wave properties dominate, making exact simultaneous measurements impossible.",
    banglaIntuition: "তরঙ্গ ফাংশন $\\Psi$ নিজে সরাসরি পরিমাপ করা যায় না, কিন্তু এর পরম মান বর্গ $|\\Psi|^2 = \\Psi^*\\Psi$ কণাটিকে খুঁজে পাওয়ার সম্ভাবনা-ঘনত্ব নির্দেশ করে। হাইজেনবার্গের অনিশ্চয়তা নীতি প্রকৃতির এক মৌলিক নিয়ম ($\\\\Delta x \\Delta p \\ge \\hbar/2$)। তরঙ্গ ফাংশন গ্রহণযোগ্য হতে হলে পাঁচটি শর্ত (সসীম, একমানবিশিষ্ট, অবিচ্ছিন্ন, মসৃণ, এবং সীমান্তে শূন্য) পূরণ করতে হবে।",
    importantFormula: "1. Normalization: $\\int |\\Psi|^2 d^3r = 1$\n2. Expectation: $\\langle Q \\rangle = \\int \\Psi^* \\hat{Q} \\Psi dx$\n3. Uncertainty: $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$\n4. Energy-Time: $\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}$",
    stepByStepSolution: "Definitions verified with Born probability interpretation, operator postulates, and wave function boundary criteria.",
    finalAnswer: "All Chapter 3 definitions, wave properties, and uncertainty relations verified for CLO-1."
  },
  {
    id: "ch3-theo-schrodinger-ti",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "derivation",
    qNumber: "Ch-3 | Broad 1",
    title: "Derive Schrödinger's Time-Independent Wave Equation (Steady-State Form)",
    tags: ["Quantum Mechanics", "Derivation", "CLO-2", "6 Marks"],
    easyDefinition: `
      <strong>Schrödinger Time-Independent Equation:</strong> The steady-state quantum equation when potential energy $V$ does not depend on time: $-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi}{dx^2} + V\\psi = E\\psi$.
      <span class="mem-hook">💡 Mental Model: (Kinetic Energy Operator) + (Potential Energy) = Total Energy ($E$).</span>
    `,
    definition: "Derivation of the steady-state equation describing stationary quantum energy eigenstates where potential $V$ is time-independent.",
    basicIdea: "Represent the free matter wave as $\\Psi = e^{i(kx - \\omega t)}$. Differentiate twice with respect to $x$ to link $\\frac{\\partial^2\\Psi}{\\partial x^2}$ with momentum $p = \\hbar k$. Substitute into classical energy $E = \\frac{p^2}{2m} + V$.",
    banglaIntuition: "তরঙ্গ সমীকরণ $\\Psi = e^{i(kx-\\omega t)}$-কে $x$-এর সাপেক্ষে ২ বার অন্তরীকরণ করলে $\\frac{\\partial^2\\Psi}{\\partial x^2} = -k^2\\Psi$ পাওয়া যায়। দ্য ব্রগলি সম্পর্ক $p = \\hbar k$ বসালে $p^2\\Psi = -\\hbar^2 \\frac{\\partial^2\\Psi}{\\partial x^2}$। মোট শক্তিতে বসালেই সময়-নিরপেক্ষ সমীকরণ পাওয়া যায়।",
    importantFormula: "$-\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + (V - E) \\Psi = 0 \\quad \\text{or} \\quad \\frac{\\partial^2 \\Psi}{\\partial x^2} + \\frac{2m}{\\hbar^2}(E - V) \\Psi = 0$",
    proof: `
      <h4>Derivation Step-by-Step:</h4>
      <p><strong>Step 1: Wave Function of a Moving Particle:</strong> Consider a de Broglie wave group associated with a moving particle along the $x$-axis:</p>
      $$\\Psi = e^{i(kx - \\omega t)} \\quad \\dots (1)$$
      <p>where $k = \\frac{2\\pi}{\\lambda}$ is wave number and $\\omega$ is angular frequency.</p>

      <p><strong>Step 2: Classical Energy Relation:</strong> If $E$ is total energy, kinetic energy $T = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$, and potential energy is $V$:</p>
      $$E = T + V = \\frac{p^2}{2m} + V \\quad \\dots (2)$$

      <p><strong>Step 3: Differentiating Twice with Respect to $x$:</strong></p>
      $$\\frac{\\partial \\Psi}{\\partial x} = ik \\cdot e^{i(kx - \\omega t)} = ik \\Psi$$
      $$\\frac{\\partial^2 \\Psi}{\\partial x^2} = (ik)(ik) e^{i(kx - \\omega t)} = i^2 k^2 \\Psi = -k^2 \\Psi \\quad (\\text{since } i^2 = -1) \\quad \\dots (3)$$

      <p><strong>Step 4: Connect Wave Number with Momentum:</strong> By de Broglie relation $\\lambda = \\frac{h}{p}$:</p>
      $$p = \\frac{h}{\\lambda} = \\frac{h}{2\\pi} \\cdot \\frac{2\\pi}{\\lambda} = \\hbar k \\implies k = \\frac{p}{\\hbar}$$
      <p>Substitute $k$ into equation (3):</p>
      $$\\frac{\\partial^2 \\Psi}{\\partial x^2} = -\\frac{p^2}{\\hbar^2} \\Psi \\implies p^2 \\Psi = -\\hbar^2 \\frac{\\partial^2 \\Psi}{\\partial x^2} \\quad \\dots (4)$$

      <p><strong>Step 5: Synthesize Wave Equation:</strong> Multiply both sides of energy equation (2) by $\\Psi$:</p>
      $$E \\Psi = \\frac{p^2 \\Psi}{2m} + V \\Psi$$
      <p>Substitute equation (4) for $p^2 \\Psi$:</p>
      $$E \\Psi = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V \\Psi$$
      <p>Rearranging all terms gives:</p>
      $$-\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + (V - E) \\Psi = 0 \\quad \\blacksquare \\text{ [PROVED]}$$
      <p>Equation is known as <strong>Schrödinger's Time Independent Equation (Steady-State Form)</strong>.</p>
    `,
    stepByStepSolution: "Derivation verified with algebraic steps and correct imaginary identity $i^2 = -1$.",
    finalAnswer: "- (ħ²/2m) ∂²Ψ/∂x² + (V - E)Ψ = 0 (Proved)"
  },
  {
    id: "ch3-theo-schrodinger-td",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "derivation",
    qNumber: "Ch-3 | Broad 2",
    title: "Derive Schrödinger's Time-Dependent Wave Equation ($i\\hbar \\frac{\\partial\\Psi}{\\partial t} = \\hat{H}\\Psi$)",
    tags: ["Quantum Mechanics", "Derivation", "CLO-2", "6 Marks"],
    easyDefinition: `
      <strong>Schrödinger Time-Dependent Equation:</strong> The dynamic equation describing how a quantum state evolves with time: $i\\hbar \\frac{\\partial\\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi}{\\partial x^2} + V\\Psi$.
      <span class="mem-hook">💡 Short Form: $i\\hbar \\frac{\\partial\\Psi}{\\partial t} = \\hat{H}\\Psi$ (where $\\hat{H}$ is the Total Energy Hamiltonian operator).</span>
    `,
    definition: "Derivation of the dynamical equation describing the fundamental time evolution of a quantum state.",
    basicIdea: "Differentiate $\\Psi = e^{i(kx - \\omega t)}$ with respect to time $t$ to extract energy operator $\\hat{E} = i\\hbar \\frac{\\partial}{\\partial t}$ from $E = \\hbar\\omega$. Equate to the spatial Hamiltonian.",
    banglaIntuition: "সময়ের সাপেক্ষে অন্তরীকরণ করলে $\\frac{\\partial\\Psi}{\\partial t} = -i\\omega\\Psi$ হয়, যা থেকে শক্তি অপারেটর $i\\hbar\\frac{\\partial\\Psi}{\\partial t}$ পাওয়া যায়। এটিকে স্থানিক হ্যামিল্টোনিয়ানের সাথে সমীকৃত করলেই সময়-নির্ভর সমীকরণ তৈরি হয়।",
    importantFormula: "$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V \\Psi$",
    proof: `
      <h4>Derivation Step-by-Step:</h4>
      <p><strong>Step 1: Wave Function Formulation:</strong></p>
      $$\\Psi = e^{i(kx - \\omega t)} \\quad \\dots (1)$$

      <p><strong>Step 2: Differentiating with Respect to Time $t$:</strong></p>
      $$\\frac{\\partial \\Psi}{\\partial t} = -i\\omega \\cdot e^{i(kx - \\omega t)} = -i\\omega \\Psi$$
      $$\\omega \\Psi = -\\frac{1}{i} \\frac{\\partial \\Psi}{\\partial t} = -\\frac{i}{i^2} \\frac{\\partial \\Psi}{\\partial t} = i \\frac{\\partial \\Psi}{\\partial t} \\quad (\\text{since } i^2 = -1) \\quad \\dots (2)$$

      <p><strong>Step 3: Photon/Energy Relation:</strong> From Planck-Einstein relation $E = h\\nu = \\frac{h}{2\\pi}(2\\pi\\nu) = \\hbar\\omega$. Multiplying by $\\Psi$:</p>
      $$E \\Psi = \\hbar \\omega \\Psi = \\hbar \\left( i \\frac{\\partial \\Psi}{\\partial t} \\right) = i\\hbar \\frac{\\partial \\Psi}{\\partial t} \\quad \\dots (3)$$

      <p><strong>Step 4: Spatial Representation of Energy:</strong> From $E = \\frac{p^2}{2m} + V$ and $p^2\\Psi = -\\hbar^2 \\frac{\\partial^2 \\Psi}{\\partial x^2}$:</p>
      $$E \\Psi = \\frac{p^2 \\Psi}{2m} + V \\Psi = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V \\Psi \\quad \\dots (4)$$

      <p><strong>Step 5: Equating Both Sides:</strong> Equating (3) and (4):</p>
      $$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V \\Psi \\quad \\blacksquare \\text{ [PROVED]}$$
      <p>This is <strong>Schrödinger's Time-Dependent Equation</strong>.</p>
    `,
    stepByStepSolution: "Derivation verified with time-derivative operator and spatial Hamiltonian.",
    finalAnswer: "iħ (∂Ψ/∂t) = - (ħ²/2m) ∂²Ψ/∂x² + VΨ (Proved)"
  },
  {
    id: "ch3-math-1",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    qNumber: "Ch-3 | Math 1",
    title: "Why Can't an Electron Reside in the Atomic Nucleus? (Uncertainty Principle Proof)",
    tags: ["Quantum Mechanics", "Uncertainty Principle", "Mid Topic 1", "3 Marks"],
    easyDefinition: `
      <strong>Why Electron Cannot Exist in Nucleus:</strong> Confining an electron inside a nucleus ($\\Delta x \\approx 10^{-14}\\text{ m}$) requires kinetic energy of at least $10-20\\text{ MeV}$. But beta-decay electrons only have $2-4\\text{ MeV}$. Hence, it cannot stay trapped inside.
      <span class="mem-hook">💡 10-Second Exam Answer: Confinement needs $10-20\\text{ MeV}$. Nature only provides $2-4\\text{ MeV}$. The deficit is too huge!</span>
    `,
    definition: "Why can't an electron be present in the nucleus? Explain the reason with the uncertainty principle.",
    basicIdea: "Confining an electron inside a nuclear diameter $d \\approx 10^{-14}\\text{ m}$ demands an enormous minimum momentum $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$, leading to a kinetic energy of $10\\text{ to }20\\text{ MeV}$ (or $\\approx 95\\text{ MeV}$ non-relativistically). Since beta-decay emissions never exceed $4\\text{ MeV}$, electrons cannot exist inside nuclei.",
    banglaIntuition: "নিউক্লিয়াসের ব্যাস ($\\\\Delta x \\approx 10^{-14}\\text{ m}$) অত্যন্ত ক্ষুদ্র। হাইজেনবার্গের অনিশ্চয়তা নীতি অনুসারে ইলেকট্রনকে ভেতরে আটকে রাখতে ন্যূনতম শক্তি প্রয়োজন $10-20\\text{ MeV}$। কিন্তু পরীক্ষায় দেখা গেছে নিউক্লিয়াস থেকে নির্গত বিটা কণার শক্তি মাত্র $2-4\\text{ MeV}$। এত উচ্চ শক্তির ইলেকট্রন নিউক্লিয়াসে থাকতে পারে না।",
    importantFormula: "1. $\\Delta x \\approx 10^{-14}\\text{ m}$\n2. $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$\n3. $E \\approx p c \\quad (\\text{Relativistic})$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 1: Spatial Confinement of the Nucleus:</div>
        <p>The diameter of an atomic nucleus is approximately $d \\approx 10^{-14}\\text{ m}$.</p>
        <p>If an electron is confined inside, its position uncertainty cannot exceed the nuclear diameter:</p>
        $$\\Delta x \\approx 10^{-14}\\text{ m}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 2: Minimum Uncertainty in Momentum:</div>
        $$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2} \\implies \\Delta p \\ge \\frac{\\hbar}{2\\Delta x} = \\frac{1.055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{2 \\times 10^{-14}\\text{ m}} = 5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 3: Energy Calculation:</div>
        <p><strong>Relativistic Energy Approach ($E \\approx pc$):</strong></p>
        $$E \\approx p \\times c = (5.27 \\times 10^{-21}\\text{ kg}\\cdot\\text{m/s}) \\times (3 \\times 10^8\\text{ m/s}) = 1.58 \\times 10^{-12}\\text{ Joules}$$
        <p>Converting to $\\text{MeV}$ ($1\\text{ MeV} = 1.6 \\times 10^{-13}\\text{ J}$):</p>
        $$E \\approx \\frac{1.58 \\times 10^{-12}}{1.6 \\times 10^{-13}} \\approx 9.9\\text{ MeV} \\sim 10\\text{ to }20\\text{ MeV}$$
        <p><em>(Note: In the non-relativistic textbook variant where $E = \\frac{p^2}{2m}$, $E \\approx 95.37\\text{ MeV}$).</em></p>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Step 4: Mandatory Physics Conclusion:</div>
        <p><strong>Conclusion:</strong> To remain confined inside the nucleus, an electron must possess kinetic energy of at least $10\\text{ to }20\\text{ MeV}$. However, experimental observations of radioactive $\\beta$-decay show that electrons emitted from nuclei have energies only around $2\\text{ to }4\\text{ MeV}$, and the nuclear binding potential is not deep enough to trap an electron with such enormous energy. <strong>Hence, an electron cannot be present inside the nucleus.</strong></p>
      </div>
    `,
    finalAnswer: "Confinement demands E ≥ 10-20 MeV >> 2-4 MeV max observed. Hence, an electron cannot exist in the nucleus."
  },
  {
    id: "ch3-math-2",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    qNumber: "Ch-3 | Math 2",
    title: "Electron Confined to a Box of Length $10^{-10}\\text{ m}$: Minimum Uncertainty in Velocity",
    tags: ["Quantum Mechanics", "Uncertainty Principle", "Mid Topic 2", "3 Marks"],
    easyDefinition: `
      <strong>Electron Velocity Uncertainty in a Box:</strong>
      Confining an electron to box length $\\Delta x$ enforces a minimum velocity uncertainty:
      $$\\Delta x \\cdot (m \\Delta v) \\ge \\frac{\\hbar}{2} \\implies \\Delta v \\ge \\frac{\\hbar}{2m\\Delta x}$$
      <span class="mem-hook">💡 Quick Exam Rule: Smaller confinement ($\\Delta x$) means wilder velocity uncertainty ($\\Delta v$). Here $\\Delta v \\approx 5.79 \\times 10^5\\text{ m/s}$.</span>
    `,
    definition: "An electron is confined to a box of length $10^{-10}\\text{ m}$. Calculate the minimum uncertainty in its velocity.",
    basicIdea: "Position uncertainty is $\\Delta x = 10^{-10}\\text{ m}$. By $\\Delta x \\cdot (m \\Delta v) \\ge \\frac{\\hbar}{2}$, calculate $\\Delta v \\ge \\frac{\\hbar}{2m\\Delta x}$.",
    banglaIntuition: "বাক্সের দৈর্ঘ্য $\\Delta x = 10^{-10}\\text{ m}$। বেগের ন্যূনতম অনিশ্চয়তা $\\Delta v = 5.79 \\times 10^5\\text{ m/s}$ (অথবা পাঠ্যবইয়ে $\\Delta x \\Delta p \\approx \\hbar$ ধরলে $1.16 \\times 10^6\\text{ m/s}$)।",
    importantFormula: "$\\Delta v \\ge \\frac{\\hbar}{2m\\Delta x} \\quad [\\text{or } \\frac{\\hbar}{m\\Delta x}]$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Data:</div>
        <ul>
          <li>Length of box, $\\Delta x = 10^{-10}\\text{ m}$</li>
          <li>Mass of electron, $m = 9.109 \\times 10^{-31}\\text{ kg}$</li>
          <li>$\\hbar = 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2} \\implies \\Delta x \\cdot (m \\Delta v) \\ge \\frac{\\hbar}{2} \\implies \\Delta v \\ge \\frac{\\hbar}{2m\\Delta x}$$
        $$\\Delta v \\ge \\frac{1.0546 \\times 10^{-34}}{2 \\times (9.109 \\times 10^{-31}) \\times 10^{-10}} = \\frac{1.0546 \\times 10^{-34}}{1.8218 \\times 10^{-40}} \\approx 5.79 \\times 10^5\\text{ m/s}$$
        <p><em>(Note: If textbook approximation $\\Delta x \\Delta p \\approx \\hbar$ is utilized: $\\Delta v \\approx 1.16 \\times 10^6\\text{ m/s}$).</em></p>
      </div>
    `,
    finalAnswer: "Minimum uncertainty in velocity Δv = 5.79 × 10⁵ m/s (or 1.16 × 10⁶ m/s)"
  },
  {
    id: "ch3-math-3",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    qNumber: "Ch-3 | Math 3",
    title: "Proton Confined to a Box of Length $5 \\times 10^{-10}\\text{ m}$: Minimum Uncertainty in Momentum & KE",
    tags: ["Quantum Mechanics", "Uncertainty Principle", "Mid Topic 3", "3 Marks"],
    easyDefinition: `
      <strong>Proton Confinement & Zero-Point Kinetic Energy:</strong>
      Confining a proton to length $\\Delta x$ gives minimum momentum $\\Delta p$ and minimum kinetic energy:
      $$\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}, \\quad K_{min} = \\frac{(\\Delta p)^2}{2 m_p}$$
      <span class="mem-hook">💡 Quick Exam Rule: First find $\\Delta p = \\frac{\\hbar}{2\\Delta x}$, then compute $K = \\frac{(\\Delta p)^2}{2m}$. Divide Joules by $1.602 \\times 10^{-19}$ for $\\text{eV}$.</span>
    `,
    definition: "A proton is confined to a box of length $5 \\times 10^{-10}\\text{ m}$. Calculate the minimum uncertainty in its momentum and kinetic energy of the proton.",
    basicIdea: "Use $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$, then compute minimum kinetic energy $K_{min} = \\frac{(\\Delta p)^2}{2 m_p}$.",
    banglaIntuition: "প্রোটন $5 \\times 10^{-10}\\text{ m}$ দৈর্ঘ্যের বাক্সে আবদ্ধ। ভরবেগের অনিশ্চয়তা $\\Delta p = 1.055 \\times 10^{-25}\\text{ kg}\\cdot\\text{m/s}$ এবং গতিশক্তি $3.32 \\times 10^{-24}\\text{ J} = 2.07 \\times 10^{-5}\\text{ eV}$।",
    importantFormula: "1. $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$\n2. $K_{min} = \\frac{(\\Delta p)^2}{2 m_p}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Box length, $\\Delta x = 5 \\times 10^{-10}\\text{ m}$</li>
          <li>Mass of proton, $m_p = 1.673 \\times 10^{-27}\\text{ kg}$</li>
          <li>$\\hbar = 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Minimum Uncertainty in Momentum ($\\Delta p$):</div>
        $$\\Delta p \\ge \\frac{\\hbar}{2\\Delta x} = \\frac{1.0546 \\times 10^{-34}}{2 \\times (5 \\times 10^{-10})} = \\frac{1.0546 \\times 10^{-34}}{10^{-9}} = 1.055 \\times 10^{-25}\\text{ kg}\\cdot\\text{m/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Minimum Kinetic Energy ($K_{min}$):</div>
        $$K_{min} = \\frac{(\\Delta p)^2}{2 m_p} = \\frac{(1.0546 \\times 10^{-25})^2}{2 \\times 1.673 \\times 10^{-27}} = \\frac{1.1122 \\times 10^{-50}}{3.346 \\times 10^{-27}} \\approx 3.324 \\times 10^{-24}\\text{ Joules}$$
        <p>Converting to electron-volts ($1\\text{ eV} = 1.602 \\times 10^{-19}\\text{ J}$):</p>
        $$K_{min} = \\frac{3.324 \\times 10^{-24}}{1.602 \\times 10^{-19}} \\approx 2.07 \\times 10^{-5}\\text{ eV}$$
      </div>
    `,
    finalAnswer: "Δp = 1.055 × 10⁻²⁵ kg·m/s | Kmin = 3.32 × 10⁻²⁴ J (2.07 × 10⁻⁵ eV)"
  },
  {
    id: "ch3-math-4",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    qNumber: "Ch-3 | Math 4",
    title: "Electron Speed $600\\text{ m/s}$ with Accuracy $0.005\\%$: Position Certainty & Comment",
    tags: ["Quantum Mechanics", "Uncertainty Principle", "Mid Topic 4", "3 Marks"],
    easyDefinition: `
      <strong>Position Uncertainty from Velocity Precision:</strong>
      Accurately knowing an electron's speed ($\\Delta v = v \\times 0.005\\%$) destroys certainty of its location:
      $$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v}$$
      <span class="mem-hook">💡 Exam Commentary: $\\Delta x \\approx 1.93\\text{ mm}$ is macroscopic (20 million times bigger than an atom!), proving electrons don't follow fixed classical paths.</span>
    `,
    definition: "An electron has a speed of $600\\text{ m/s}$ with an accuracy of $0.005\\%$. Calculate the certainty with which we can locate the position of the electron. Comment on your answer.",
    basicIdea: "Uncertainty in speed is $\\Delta v = 600 \\times 0.00005 = 0.03\\text{ m/s}$. Find position uncertainty $\\Delta x \\ge \\frac{\\hbar}{2m\\Delta v}$. Comment on how macroscopic $1.93\\text{ mm}$ is relative to atomic dimensions.",
    banglaIntuition: "বেগের সূক্ষ্মতা বেশি হওয়ায় অবস্থানের অনিশ্চয়তা দাঁড়ায় $\\Delta x = 1.93\\text{ mm}$। এটি একটি পরমাণুর চেয়ে প্রায় ২ কোটি গুণ বড়, যা প্রমাণ করে ইলেকট্রনের সুনির্দিষ্ট কক্ষপথ থাকা অবাস্তব।",
    importantFormula: "$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} = \\frac{h}{4\\pi m \\Delta v}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Speed, $v = 600\\text{ m/s}$</li>
          <li>Accuracy $= 0.005\\% = 0.00005$</li>
          <li>Uncertainty in speed, $\\Delta v = 600 \\times 0.00005 = 0.03\\text{ m/s}$</li>
          <li>$m = 9.109 \\times 10^{-31}\\text{ kg}, \\quad \\hbar = 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} = \\frac{1.0546 \\times 10^{-34}}{2 \\times (9.109 \\times 10^{-31}) \\times 0.03} = \\frac{1.0546 \\times 10^{-34}}{5.4654 \\times 10^{-32}} \\approx 0.00193\\text{ m} = 1.93\\text{ mm}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Physical Commentary:</div>
        <p><strong>Comment:</strong> An uncertainty of $1.93\\text{ mm}$ is roughly $20\\text{ million times}$ larger than the diameter of an atom ($\\sim 10^{-10}\\text{ m}$). By determining the electron's speed to high precision, our knowledge of its location at atomic scales is completely lost, demonstrating the quantum nature of subatomic particles.</p>
      </div>
    `,
    finalAnswer: "Position certainty Δx = 1.93 mm (Comment: Macroscopic uncertainty dominates on atomic scale)"
  },
  {
    id: "ch3-math-5",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    qNumber: "Ch-3 | Math 5",
    title: "Bullet of Mass $0.025\\text{ kg}$ Moving at $400\\text{ m/s}$ (Accuracy $0.02\\%$): Classical vs Quantum",
    tags: ["Quantum Mechanics", "Uncertainty Principle", "Mid Topic 5", "3 Marks"],
    easyDefinition: `
      <strong>Quantum Uncertainty for Everyday Macroscopic Objects:</strong>
      Because macroscopic bodies have huge mass ($m = 0.025\\text{ kg}$), quantum uncertainty vanishes:
      $$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} \\approx 2.64 \\times 10^{-32}\\text{ m}$$
      <span class="mem-hook">💡 Exam Commentary: $10^{-32}\\text{ m}$ is undetectable in human life, which is why everyday physics obeys deterministic Newton's Laws.</span>
    `,
    definition: "A bullet of mass $0.025\\text{ kg}$ is moving with a speed of $400\\text{ m/s}$. The speed is measured accurate to $0.02\\%$. Calculate the certainty with which we can locate the position of the bullet.",
    basicIdea: "For macroscopic bodies, the mass is huge ($0.025\\text{ kg}$), making $\\Delta x \\ge \\frac{\\hbar}{2m\\Delta v} \\approx 10^{-32}\\text{ m}$, which is imperceptible and explains why classical determinism works.",
    banglaIntuition: "গুলির মতো ভারী বস্তুর ক্ষেত্রে অবস্থানের অনিশ্চয়তা মাত্র $2.64 \\times 10^{-32}\\text{ m}$, যা প্রোটনের চেয়েও ট্রিলিয়ন গুণ ক্ষুদ্র। তাই স্বাভাবিক জীবনে কোয়ান্টাম অনিশ্চয়তা টের পাওয়া যায় না এবং ক্লাসিক্যাল বলবিদ্যা বহাল থাকে।",
    importantFormula: "$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v}$",
    stepByStepSolution: `
      <div class="exam-script-step">
        <div class="exam-script-step-title">Given Parameters:</div>
        <ul>
          <li>Mass of bullet, $m = 0.025\\text{ kg}$</li>
          <li>Speed, $v = 400\\text{ m/s}$</li>
          <li>Accuracy $= 0.02\\% = 0.0002$</li>
          <li>Uncertainty in speed, $\\Delta v = 400 \\times 0.0002 = 0.08\\text{ m/s}$</li>
          <li>$\\hbar = 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Calculation:</div>
        $$\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} = \\frac{1.0546 \\times 10^{-34}}{2 \\times 0.025 \\times 0.08} = \\frac{1.0546 \\times 10^{-34}}{0.004} = 2.6365 \\times 10^{-32}\\text{ m} \\approx 2.64 \\times 10^{-32}\\text{ m}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Physical Commentary:</div>
        <p><strong>Comment:</strong> An uncertainty of $10^{-32}\\text{ m}$ is trillions of times smaller than a single proton ($\\sim 10^{-15}\\text{ m}$). It is completely undetectable in the macroscopic world, proving why everyday objects obey deterministic Newtonian trajectories.</p>
      </div>
    `,
    finalAnswer: "Position certainty Δx = 2.64 × 10⁻³² m (Negligible; confirms classical mechanics)"
  },

  {
    id: "ex-s26-1c",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Spring 2026",
    qNumber: "Spring 2026 | Q. 1(c)",
    title: "Flywheel of Mass 150 kg at 18 rev/s: Calculate Rotational Kinetic Energy",
    tags: ["Spring 2026", "Flywheel", "CLO-3", "2 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Flywheel Rotational Kinetic Energy:</strong>
      For a flywheel with mass concentrated at its outer rim, rotational inertia is $I = M R^2$ and rotational energy is $K_{rot} = \\frac{1}{2} I \\omega^2$.
      <span class="mem-hook">💡 Exam Shortcut: Multiply $2\\pi \\times 18$ to get $\\omega$, then compute $\\frac{1}{2} M R^2 \\omega^2 = 5.40 \\times 10^5\\text{ J}$.</span>
    `,
    definition: "A flywheel of mass $150\\text{ kg}$ and radius $0.75\\text{ m}$ makes $18\\text{ revolutions per second}$. Calculate (i) the rotational kinetic energy of the flywheel. Assume that the whole mass of the flywheel is concentrated at the rim. [IIUC Spring-2026, CLO3, Marks: 02]",
    basicIdea: "Because the mass is concentrated entirely at the rim, the flywheel acts like a thin circular hoop of moment of inertia $I = M R^2$. The rotational speed in rev/sec is converted to angular frequency via $\\omega = 2\\pi n$. Then energy is $E = \\frac{1}{2} I \\omega^2$.",
    banglaIntuition: "ফ্লাইহুইলের সমস্ত ভর পরিধিতে কেন্দ্রীভূত থাকায় এর জড়তার ভ্রামক পাতলা রিংয়ের মতো: $I = M R^2$। প্রতি সেকেন্ডে ১৮ আবর্তন মানে $\\omega = 2\\pi \\times 18 = 36\\pi\\text{ rad/s}$। মোট ঘূর্ণন গতিশক্তি $K_{rot} = \\frac{1}{2} I \\omega^2 = 5.40 \\times 10^5\\text{ J}$ বা $539.62\\text{ kJ}$।",
    importantFormula: "1. $\\omega = 2\\pi n$\n2. $I = M R^2$\n3. $K_{rot} = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters (from Question):</div>
        <ul>
          <li>Mass of the flywheel, $M = 150\\text{ kg}$</li>
          <li>Radius of the flywheel, $R = 0.75\\text{ m}$</li>
          <li>Frequency of revolution, $n = 18\\text{ rev/s}$ (rps)</li>
          <li>Structural condition: Mass is concentrated entirely at the rim (Ring/Hoop model).</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Relevant Governing Formulas:</div>
        $$\\omega = 2\\pi n$$
        $$I = M R^2 \\quad \\text{(for mass concentrated at the rim)}$$
        $$K_{rot} = \\frac{1}{2} I \\omega^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Step-by-Step Mathematical Evaluation:</div>
        <p><strong>Step (a): Compute Angular Velocity ($\\omega$):</strong></p>
        $$\\omega = 2\\pi \\times 18 = 36\\pi\\text{ rad/s} \\approx 113.097\\text{ rad/s}$$

        <p><strong>Step (b): Compute Moment of Inertia ($I$):</strong></p>
        $$I = M R^2 = 150\\text{ kg} \\times (0.75\\text{ m})^2 = 150 \\times 0.5625 = 84.375\\text{ kg}\\cdot\\text{m}^2$$

        <p><strong>Step (c): Compute Rotational Kinetic Energy ($K_{rot}$):</strong></p>
        $$K_{rot} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\times 84.375 \\times (36\\pi)^2$$
        $$K_{rot} = \\frac{1}{2} \\times 84.375 \\times 12791.062 = 539,622.3\\text{ Joules}$$
        $$K_{rot} \\approx 539.62\\text{ kJ} = 5.40 \\times 10^5\\text{ J}$$
      </div>
    `,
    shortcut: "K_rot = 0.5 * 150 * 0.75^2 * (36 * pi)^2 = 539.62 kJ.",
    finalAnswer: "Rotational Kinetic Energy K_rot = 5.40 × 10⁵ J (or 539.62 kJ)"
  },
  {
    id: "ex-s26-2c",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    examPaper: "Spring 2026",
    qNumber: "Spring 2026 | Q. 2(c)",
    title: "Ball on Launchpad at Kennedy Space Center: Gravitational Potential Energy & Total Energy",
    tags: ["Spring 2026", "Gravity", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Mechanical Energy on Launchpad:</strong>
      Before launch, the body is stationary on Earth's surface ($K = 0$). Total mechanical energy is purely negative gravitational potential energy:
      $$E = K + U = 0 + \left(-\frac{G M_E m}{R_E}\right) = -\frac{G M_E m}{R_E}$$
      <span class="mem-hook">💡 Exam Rule: Stationary on launchpad means $K = 0$, so total mechanical energy equals potential energy.</span>
    `,
    definition: "A ball of mass $8.20\\text{ kg}$ is on the launchpad at the Kennedy Space Center (before launch). Find (a) the gravitational potential energy in MJ, and (b) the total mechanical energy in MJ. (Given, the radius of the earth, $R = 6.37 \\times 10^6\\text{ m}$, mass of Earth $M_E = 5.98 \\times 10^{24}\\text{ kg}$) [IIUC Spring-2026, CLO3, Marks: 03]",
    basicIdea: "On Earth's surface, $U = -G M_E m / R$. Because the ball is stationary before launch, $K = 0$, so total mechanical energy $E = U$.",
    banglaIntuition: "উৎক্ষেপণের পূর্বে বলটি স্থির থাকায় গতিশক্তি $0$। মোট যান্ত্রিক শক্তি = মহাকর্ষীয় বিভব শক্তি = $-513.7\\text{ MJ}$।",
    importantFormula: "1. $U = -\\frac{G M_E m}{R_E}$\\n2. $E = K + U = 0 + U$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 2(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of the ball, $m = 8.20\\text{ kg}$</li>
          <li>Mass of the Earth, $M_E = 5.98 \\times 10^{24}\\text{ kg}$</li>
          <li>Radius of the Earth, $R_E = 6.37 \\times 10^6\\text{ m}$</li>
          <li>Universal Gravitational Constant, $G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Calculation of Gravitational Potential Energy (GPE):</div>
        $$U = -\\frac{G M_E m}{R_E}$$
        $$U = -\\frac{(6.674 \\times 10^{-11}) \\times (5.98 \\times 10^{24}) \\times 8.20}{6.37 \\times 10^6}$$
        $$U = -\\frac{3.2726 \\times 10^{15}}{6.37 \\times 10^6} = -5.1375 \\times 10^8\\text{ Joules} \\approx -513.7\\text{ MJ}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Calculation of Total Mechanical Energy:</div>
        <p>Before launch, the ball is at rest on the launchpad, so kinetic energy $K = 0$:</p>
        $$E = K + U = 0 + (-513.7\\text{ MJ}) = -513.7\\text{ MJ}$$
      </div>
    `,
    shortcut: "U = -GMm/R = -513.7 MJ; K = 0 => E = -513.7 MJ",
    finalAnswer: "(a) GPE = -513.7 MJ | (b) Total Energy = -513.7 MJ"
  },

  {
    id: "ex-a25-1c",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Autumn 2025",
    qNumber: "Autumn 2025 | Q. 1(c)",
    title: "Solid Disc Flywheel of Mass 20 kg & Radius 30 cm at 100 rad/s: Rotational KE",
    tags: ["Autumn 2025", "Solid Disc", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Solid Circular Disc Flywheel:</strong>
      For a uniform solid circular disc, moment of inertia is $I = \\frac{1}{2} M R^2$. Kinetic energy is $K_{rot} = \\frac{1}{2} I \\omega^2$.
      <span class="mem-hook">💡 Direct Exam Rule: Convert $30\\text{ cm} = 0.3\\text{ m}$. $I = 0.5 \\times 20 \\times 0.09 = 0.9\\text{ kg}\\cdot\\text{m}^2$. $K = 0.5 \\times 0.9 \\times 10000 = 4500\\text{ J}$.</span>
    `,
    definition: "A solid disc flywheel of mass $20\\text{ kg}$ and radius $30\\text{ cm}$ is rotating at $100\\text{ rad/s}$. Calculate its rotational kinetic energy. [IIUC Autumn-2025, CLO3, Marks: 03]",
    basicIdea: "Notice the geometry specifies a *solid disc*, so the moment of inertia coefficient is $1/2$ rather than $1$. After computing $I = \\frac{1}{2}MR^2$, evaluate rotational energy directly.",
    banglaIntuition: "প্রশ্নে নিরেট বৃত্তাকার ডিস্ক বলা হয়েছে, তাই $I = \\frac{1}{2}MR^2$। $30\\text{ cm} = 0.3\\text{ m}$ বসালে $I = 0.9\\text{ kg}\\cdot\\text{m}^2$। গতিশক্তি $K_{rot} = \\frac{1}{2} \\times 0.9 \\times (100)^2 = 4500\\text{ J}$ বা $4.5\\text{ kJ}$।",
    importantFormula: "1. $I = \\frac{1}{2} M R^2$\n2. $K_{rot} = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of solid disc flywheel, $M = 20\\text{ kg}$</li>
          <li>Radius of solid disc, $R = 30\\text{ cm} = 0.30\\text{ m}$</li>
          <li>Angular velocity, $\\omega = 100\\text{ rad/s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Relevant Governing Formulas:</div>
        $$I = \\frac{1}{2} M R^2 \\quad \\text{(for a uniform solid circular disc)}$$
        $$K_{rot} = \\frac{1}{2} I \\omega^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Step-by-Step Mathematical Calculation:</div>
        <p><strong>Step (i): Moment of Inertia ($I$):</strong></p>
        $$I = \\frac{1}{2} \\times 20\\text{ kg} \\times (0.30\\text{ m})^2$$
        $$I = 10 \\times 0.09 = 0.90\\text{ kg}\\cdot\\text{m}^2$$

        <p><strong>Step (ii): Rotational Kinetic Energy ($K_{rot}$):</strong></p>
        $$K_{rot} = \\frac{1}{2} \\times 0.90\\text{ kg}\\cdot\\text{m}^2 \\times (100\\text{ rad/s})^2$$
        $$K_{rot} = 0.45 \\times 10,000 = 4,500\\text{ Joules} = 4.50\\text{ kJ}$$
      </div>
    `,
    shortcut: "I = 0.5 * 20 * (0.3)^2 = 0.9. K = 0.5 * 0.9 * 100^2 = 4500 J.",
    finalAnswer: "Rotational Kinetic Energy K_rot = 4500 J (or 4.50 kJ)"
  },

  {
    id: "ex-a25-2b",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    examPaper: "Autumn 2025",
    qNumber: "Autumn 2025 | Q. 2(b)",
    title: "Spherical Shell of Mass YY × 10²⁴ kg & Radius 5000 km: Potential at Internal Point 4000 km",
    tags: ["Autumn 2025", "Spherical Shell", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Potential Inside a Spherical Shell:</strong>
      At any point INSIDE a spherical shell ($r < R$), the gravitational potential is strictly constant and equal to its value on the surface:
      $$V_{in} = -\\frac{G M}{R}$$
      <span class="mem-hook">💡 Vital Catch: Test mass $Z$ and inner distance $4000\\text{ km}$ DO NOT change the potential! Use surface radius $R = 5000\\text{ km}$.</span>
    `,
    definition: "A thin spherical shell of mass $YY \\times 10^{24}\\text{ kg}$ and radius $5000\\text{ km}$ is given. A test mass of $Z\\text{ kg}$ is placed at a distance of $4000\\text{ km}$ from the center. Calculate the gravitational potential at this point. Here, $YY$ is the last two digits of your ID and $Z$ is the mass of your body. [IIUC Autumn-2025, CLO3, Marks: 03]",
    basicIdea: "Recognize that $4000\\text{ km} < 5000\\text{ km}$, placing the test point inside the shell. By Newton's shell theorem, gravitational potential inside a shell is constant everywhere and equals $-GM/R$. State the general algebraic formula with $YY$ and compute a benchmark numerical value.",
    banglaIntuition: "যেহেতু দূরত্বের মান $4000\\text{ km} < 5000\\text{ km}$, বিন্দুটি গোলকীয় খোলকের ভেতরে অবস্থিত! খোলকের ভেতরে সর্বত্র মহাকর্ষীয় বিভব সমান ও ধ্রুবক: $V_{in} = -\\frac{GM}{R}$। লক্ষ্য করুন, বিভবের মান টেস্ট ভর $Z$ এবং ভেতরের দূরত্বের ওপর নির্ভর করে না!",
    importantFormula: "V_{in} = V_{surface} = -\\frac{G M}{R} \\quad (\\text{for all } r \\le R)",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 2(b)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Radius of the spherical shell, $R = 5000\\text{ km} = 5.0 \\times 10^6\\text{ m}$</li>
          <li>Mass of the spherical shell, $M = YY \\times 10^{24}\\text{ kg}$</li>
          <li>Distance of test point from center, $r = 4000\\text{ km} = 4.0 \\times 10^6\\text{ m}$</li>
          <li>Test mass placed at the point = $Z\\text{ kg}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Physical Principle & Theorem:</div>
        <p>Comparing the spatial coordinates:</p>
        $$r = 4000\\text{ km} < R = 5000\\text{ km}$$
        <p>Therefore, the test point is located <strong>INSIDE</strong> the spherical shell.</p>
        <p>According to <strong>Newton's Shell Theorem</strong>, the gravitational field inside a uniform spherical shell is zero everywhere ($\\vec{E}_{in} = 0$). Because $\\vec{E} = -\\frac{dV}{dr} = 0$, the gravitational potential $V$ inside the shell is strictly constant and equal to its value at the shell surface:</p>
        $$V_{in} = -\\frac{G M}{R}$$
        <p><em>Analytical Remark:</em> Gravitational potential $V$ is defined per unit mass; it is completely independent of the magnitude of the test mass $Z$.</p>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. General Algebraic Solution:</div>
        $$V_{in} = -\\frac{(6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2) \\times (YY \\times 10^{24}\\text{ kg})}{5.0 \\times 10^6\\text{ m}}$$
        $$V_{in} = -(1.3348 \\times 10^7 \\times YY)\\text{ J/kg}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">4. Numerical Demonstration (for typical ID YY = 50):</div>
        $$V_{in} = -1.3348 \\times 10^7 \\times 50 = -6.674 \\times 10^8\\text{ J/kg}$$
      </div>
    `,
    shortcut: "V_in = -GM/R = -(1.3348 × 10⁷ × YY) J/kg.",
    finalAnswer: "Gravitational Potential V = - (1.335 × 10⁷ × YY) J/kg [e.g. -6.67 × 10⁸ J/kg for YY=50]"
  },

  {
    id: "ex-a25-3c",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    examPaper: "Autumn 2025",
    qNumber: "Autumn 2025 | Q. 3(c) OR",
    title: "Collapsing Star of Mass 2 × 10³¹ kg: Radius Where Escape Velocity Equals Speed of Light",
    tags: ["Autumn 2025", "Schwarzschild Radius", "Black Hole", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Schwarzschild Radius of a Collapsing Star:</strong>
      The critical radius at which escape velocity equals the speed of light $c$:
      $$R_s = \\frac{2GM}{c^2}$$
      <span class="mem-hook">💡 Direct Black Hole Formula: $R = \\frac{2 \\times 6.674 \\times 10^{-11} \\times 2 \\times 10^{31}}{(3 \\times 10^8)^2} \\approx 29.66\\text{ km}$.</span>
    `,
    definition: "If a star of mass $2 \\times 10^{31}\\text{ kg}$ collapses under its gravity, using the escape velocity formula, calculate the radius at which escape velocity equals the speed of light. [IIUC Autumn-2025, CLO3, Marks: 03]",
    basicIdea: "Equate the escape velocity equation $v_e = \\sqrt{2GM/R}$ to $c$, solve algebraically for $R = \\frac{2GM}{c^2}$, and substitute astronomical constants.",
    banglaIntuition: "মুক্তিবেগের সূত্র $v_e = \\sqrt{\\frac{2GM}{R}}$। যখন মুক্তিবেগ আলোর বেগ $c$-এর সমান হয়, তখন $c = \\sqrt{\\frac{2GM}{R}} \\implies R = \\frac{2GM}{c^2}$। একে ব্ল্যাকহোলের শোয়ার্জশিল্ড ব্যাসার্ধ বলে। মান বসালে ব্যাসার্ধ পাওয়া যায় প্রায় $29.66\\text{ km}$।",
    importantFormula: "v_e = \\sqrt{\\frac{2GM}{R}} = c \\implies R_s = \\frac{2GM}{c^2}",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 3(c) [Alternative / OR]</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of the collapsing star, $M = 2 \\times 10^{31}\\text{ kg}$</li>
          <li>Speed of light in vacuum, $c = 3.0 \\times 10^8\\text{ m/s}$</li>
          <li>Universal Gravitational Constant, $G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Formula Derivation from Escape Velocity:</div>
        <p>The escape velocity $v_e$ from a spherical body of mass $M$ and radius $R$ is given by:</p>
        $$v_e = \\sqrt{\\frac{2GM}{R}}$$
        <p>According to the problem, the star collapses until its escape velocity equals the speed of light ($v_e = c$):</p>
        $$c = \\sqrt{\\frac{2GM}{R}}$$
        <p>Squaring both sides:</p>
        $$c^2 = \\frac{2GM}{R} \\implies R = \\frac{2GM}{c^2}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Numerical Evaluation:</div>
        $$R = \\frac{2 \\times (6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2) \\times (2.0 \\times 10^{31}\\text{ kg})}{(3.0 \\times 10^8\\text{ m/s})^2}$$
        $$R = \\frac{2.6696 \\times 10^{21}}{9.0 \\times 10^{16}} = 29,662.2\\text{ metres}$$
        $$R \\approx 29.66\\text{ km} = 2.97 \\times 10^4\\text{ m}$$
      </div>
    `,
    shortcut: "R = 2GM/c^2 = 2 * 6.674e-11 * 2e31 / 9e16 = 29.66 km.",
    finalAnswer: "Critical Collapse Radius R = 2.97 × 10⁴ m (or 29.66 km)"
  },

  {
    id: "ex-s25-1c",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Spring 2025",
    qNumber: "Spring 2025 | Q. 1(c)",
    title: "Flywheel of Mass 100 kg & Radius 0.5 m at 10 rev/s: Calculate (i) ω, (ii) I, (iii) Energy",
    tags: ["Spring 2025", "Spring 2024", "Flywheel", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Flywheel Tri-Part Problem:</strong>
      1. Angular velocity: $\\omega = 2\\pi n = 20\\pi \\approx 62.83\\text{ rad/s}$.<br>
      2. Moment of inertia: $I = M R^2 = 100 \\times (0.5)^2 = 25\\text{ kg}\\cdot\\text{m}^2$.<br>
      3. Rotational energy: $E = \\frac{1}{2} I \\omega^2 = 49.35\\text{ kJ}$.
      <span class="mem-hook">💡 Repeated IIUC Midterm Problem: Appeared verbatim in Spring-2025 and Spring-2024.</span>
    `,
    definition: "A flywheel of mass $100\\text{ kg}$ and radius $0.5\\text{ m}$ makes $10\\text{ revolutions per second}$. Calculate (i) angular velocity, (ii) moment of inertia, and (iii) the energy of the flywheel. Assume that the whole mass of the flywheel is concentrated at the rim. [IIUC Spring-2025 & Spring-2024, CLO3, Marks: 03]",
    basicIdea: "Calculate each of the three demanded parameters in explicit sequential subsections (i), (ii), and (iii) with correct units.",
    banglaIntuition: "তিনটি অংশ ধাপে ধাপে নির্ণয় করুন: (i) কৌণিক বেগ $\\omega = 2\\pi \\times 10 = 20\\pi\\text{ rad/s} \\approx 62.83\\text{ rad/s}$, (ii) জড়তার ভ্রামক $I = 100 \\times (0.5)^2 = 25\\text{ kg}\\cdot\\text{m}^2$, (iii) মোট শক্তি $E = \\frac{1}{2} \\times 25 \\times (20\\pi)^2 \\approx 49.35\\text{ kJ}$।",
    importantFormula: "1. $\\omega = 2\\pi n$\n2. $I = M R^2$\n3. $E = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of flywheel, $M = 100\\text{ kg}$</li>
          <li>Radius of flywheel, $R = 0.5\\text{ m}$</li>
          <li>Rotational speed, $n = 10\\text{ rev/s}$ (rps)</li>
          <li>Assumption: Entire mass is concentrated at the outer rim ($I = M R^2$).</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Calculate Angular Velocity ($\\omega$):</div>
        $$\\omega = 2\\pi n = 2\\pi \\times 10 = 20\\pi\\text{ rad/s} \\approx 62.832\\text{ rad/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Calculate Moment of Inertia ($I$):</div>
        $$I = M R^2 = 100\\text{ kg} \\times (0.5\\text{ m})^2 = 100 \\times 0.25 = 25\\text{ kg}\\cdot\\text{m}^2$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (iii): Calculate Rotational Kinetic Energy ($E$):</div>
        $$E = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\times 25\\text{ kg}\\cdot\\text{m}^2 \\times (20\\pi\\text{ rad/s})^2$$
        $$E = 12.5 \\times 400\\pi^2 = 5000 \\times 9.8696 = 49,348.02\\text{ Joules} \\approx 49.35\\text{ kJ}$$
      </div>
    `,
    shortcut: "(i) ω = 20π = 62.83 rad/s | (ii) I = 25 kg·m² | (iii) E = 49.35 kJ.",
    finalAnswer: "(i) ω = 62.83 rad/s | (ii) I = 25 kg·m² | (iii) E = 49.35 kJ"
  },

  {
    id: "ex-s25-3c",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    examPaper: "Spring 2025",
    qNumber: "Spring 2025 | Q. 3(c)",
    title: "Uncertainty in Position of Electron (Mass 9 × 10⁻²⁸ g, Speed Uncertainty 3 × 10⁹ cm/s)",
    tags: ["Spring 2025", "Uncertainty Principle", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Uncertainty in Position Calculation:</strong>
      By Heisenberg's Uncertainty Principle: $\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} = \\frac{h}{4\\pi m \\Delta v}$.
      <span class="mem-hook">💡 Watch Units! Convert $9 \\times 10^{-28}\\text{ g} = 9 \\times 10^{-31}\\text{ kg}$ and $3 \\times 10^9\\text{ cm/s} = 3 \\times 10^7\\text{ m/s}$.</span>
    `,
    definition: "Calculate the uncertainty in the position of an electron weighing $9 \\times 10^{-28}\\text{ gm}$ and moving with an uncertainty in speed of $3 \\times 10^9\\text{ cm/sec}$. [IIUC Spring-2025, CLO3, Marks: 03]",
    basicIdea: "Convert mass from grams to kg and velocity from cm/s to m/s. Then apply Heisenberg's position-momentum uncertainty relation.",
    banglaIntuition: "একক রূপান্তর সতর্কতার সাথে করুন: $m = 9 \\times 10^{-28}\\text{ g} = 9 \\times 10^{-31}\\text{ kg}$ এবং $\\Delta v = 3 \\times 10^9\\text{ cm/s} = 3 \\times 10^7\\text{ m/s}$। সূত্রে বসালে অবস্থান অনিশ্চয়তা $\\Delta x = 1.95 \\times 10^{-12}\\text{ m}$ বা $1.95\\text{ pm}$।",
    importantFormula: "\\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v} = \\frac{h}{4\\pi m \\Delta v}",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 3(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters (Converted to SI Units):</div>
        <ul>
          <li>Mass of electron, $m = 9 \\times 10^{-28}\\text{ gm} = 9.0 \\times 10^{-31}\\text{ kg}$</li>
          <li>Uncertainty in speed, $\\Delta v = 3 \\times 10^9\\text{ cm/s} = 3.0 \\times 10^7\\text{ m/s}$</li>
          <li>Reduced Planck Constant, $\\hbar = 1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Relevant Formula:</div>
        $$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2} \\implies \\Delta x \\ge \\frac{\\hbar}{2 m \\Delta v}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Step-by-Step Numerical Calculation:</div>
        $$\\Delta x \\ge \\frac{1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{2 \\times (9.0 \\times 10^{-31}\\text{ kg}) \\times (3.0 \\times 10^7\\text{ m/s})}$$
        $$\\Delta x \\ge \\frac{1.0546 \\times 10^{-34}}{5.40 \\times 10^{-23}} = 1.953 \\times 10^{-12}\\text{ metres}$$
        <p><em>(Alternative textbook form using $\\Delta x \\cdot \\Delta p \\approx h$ gives $\\Delta x \\approx 2.45 \\times 10^{-11}\\text{ m}$)</em></p>
      </div>
    `,
    shortcut: "Δx = 1.0546e-34 / (2 * 9e-31 * 3e7) = 1.95 × 10⁻¹² m.",
    finalAnswer: "Minimum Uncertainty in Position Δx = 1.95 × 10⁻¹² m (or 1.95 pm)"
  },
  {
    id: "ex-s24-3b",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "numerical",
    examPaper: "Spring 2024",
    qNumber: "Spring 2024 | Q. 3(b)",
    title: "Uncertainty in Momentum & Velocity of Electron vs Alpha Particle",
    tags: ["Spring 2024", "Autumn 2025", "Quantum", "CLO-2", "CLO-3", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Heisenberg Uncertainty in Momentum & Velocity:</strong>
      $$\\Delta p \\ge \\frac{\\hbar}{2 \\Delta x}, \\quad \\Delta v = \\frac{\\Delta p}{m} = \\frac{\\hbar}{2 m \\Delta x}$$
      <span class="mem-hook">💡 Key Exam Step: Convert cm to m: $0.01\\text{ cm} = 10^{-4}\\text{ m}$, $5 \\times 10^{-8}\\text{ cm} = 5 \\times 10^{-10}\\text{ m}$.</span>
    `,
    definition: "Find the uncertainty in the momentum of a particle when its position is determined within $0.01\\text{ cm}$. Find also the uncertainty in the velocity of an electron and an alpha particle respectively, when they are located within $5 \\times 10^{-8}\\text{ cm}$. [IIUC Spring-2024, CLO2, Marks: 03; Autumn-2025, CLO3, Marks: 03]",
    basicIdea: "Use $\\Delta x \\cdot \\Delta p \\ge \\hbar / 2$. First find $\\Delta p$ for $\\Delta x = 10^{-4}\\text{ m}$. Next, for $\\Delta x = 5 \\times 10^{-10}\\text{ m}$, find $\\Delta p$ and divide by $m_e$ ($9.11 \\times 10^{-31}\\text{ kg}$) and $m_\\alpha$ ($6.64 \\times 10^{-27}\\text{ kg}$).",
    banglaIntuition: "অবস্থানের অনিশ্চয়তা জানা থাকলে ভরবেগের অনিশ্চয়তা $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$। এরপর ভর দ্বারা ভাগ করলে বেগের অনিশ্চয়তা পাওয়া যায়। ভারী আলফা কণার তুলনায় হালকা ইলেকট্রনের বেগের অনিশ্চয়তা অনেক বেশি।",
    importantFormula: "1. $\\Delta p \\ge \\frac{\\hbar}{2\\Delta x}$\\n2. $\\Delta v = \\frac{\\Delta p}{m}$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 3(b)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (i): Uncertainty in Momentum for $\\Delta x = 0.01\\text{ cm}$:</div>
        $$\\Delta x = 0.01\\text{ cm} = 1.0 \\times 10^{-4}\\text{ m}$$
        $$\\Delta p \\ge \\frac{\\hbar}{2\\Delta x} = \\frac{1.0546 \\times 10^{-34}}{2 \\times 1.0 \\times 10^{-4}} = 5.273 \\times 10^{-31}\\text{ kg}\\cdot\\text{m/s}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">Part (ii): Velocity Uncertainty for Electron & Alpha Particle ($\\Delta x = 5 \\times 10^{-8}\\text{ cm}$):</div>
        $$\\Delta x = 5 \\times 10^{-8}\\text{ cm} = 5.0 \\times 10^{-10}\\text{ m}$$
        $$\\Delta p \\ge \\frac{1.0546 \\times 10^{-34}}{2 \\times 5.0 \\times 10^{-10}} = 1.0546 \\times 10^{-25}\\text{ kg}\\cdot\\text{m/s}$$
        <p><strong>For Electron ($m_e = 9.109 \\times 10^{-31}\\text{ kg}$):</strong></p>
        $$\\Delta v_e = \\frac{\\Delta p}{m_e} = \\frac{1.0546 \\times 10^{-25}}{9.109 \\times 10^{-31}} \\approx 1.158 \\times 10^5\\text{ m/s}$$
        <p><strong>For Alpha Particle ($m_\\alpha = 6.644 \\times 10^{-27}\\text{ kg}$):</strong></p>
        $$\\Delta v_\\alpha = \\frac{\\Delta p}{m_\\alpha} = \\frac{1.0546 \\times 10^{-25}}{6.644 \\times 10^{-27}} \\approx 15.87\\text{ m/s}$$
      </div>
    `,
    shortcut: "dp = hbar/(2*dx); dv_e = dp/m_e = 1.16e5 m/s; dv_alpha = dp/m_alpha = 15.9 m/s",
    finalAnswer: "Δp = 5.27 × 10⁻³¹ kg·m/s | Δv_e ≈ 1.16 × 10⁵ m/s | Δv_α ≈ 15.87 m/s"
  },
  {
    id: "ex-a23-1c",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Autumn 2023",
    qNumber: "Autumn 2023 | Q. 1(c)",
    title: "Circular Disc of Mass 100 g & Radius 10 cm Rotating at 120 rpm: Rotational Kinetic Energy",
    tags: ["Autumn 2023", "Rigid Body", "CO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Rotational Energy of a Circular Disc:</strong>
      For a uniform solid circular disc rotating about its central perpendicular axis, $I = \\frac{1}{2} M R^2$ and $K_{rot} = \\frac{1}{2} I \omega^2$.
      <span class="mem-hook">💡 RPM to rad/s: $\\omega = \\frac{120 \\times 2\\pi}{60} = 4\\pi\\text{ rad/s}$.</span>
    `,
    definition: "A circular disc of mass $100\\text{ grams}$ and radius $10\\text{ cm}$ is making $120\\text{ rpm}$ about an axis passing through its centre and perpendicular to its plane. Calculate its kinetic energy. [IIUC Autumn-2023, CO2, Marks: 03]",
    basicIdea: "Convert mass to kg ($0.10\\text{ kg}$), radius to m ($0.10\\text{ m}$), and speed to rad/s ($\\omega = 4\\pi\\text{ rad/s}$). Moment of inertia is $I = \\frac{1}{2} M R^2$, then calculate $K = \\frac{1}{2} I \\omega^2$.",
    banglaIntuition: "ভর $0.1\\text{ kg}$, ব্যাসার্ধ $0.1\\text{ m}$। চাকতির জড়তার ভ্রামক $I = \\frac{1}{2} M R^2 = 5 \\times 10^{-4}\\text{ kg}\\cdot\\text{m}^2$। কৌণিক বেগ $\\omega = 4\\pi\\text{ rad/s}$। গতিশক্তি $K = \\frac{1}{2} I \\omega^2 = 3.95 \\times 10^{-2}\\text{ J}$।",
    importantFormula: "1. $\\omega = \\frac{2\\pi N}{60}$\\n2. $I = \\frac{1}{2} M R^2$\\n3. $K_{rot} = \\frac{1}{2} I \\omega^2$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of circular disc, $M = 100\\text{ g} = 0.10\\text{ kg}$</li>
          <li>Radius of disc, $R = 10\\text{ cm} = 0.10\\text{ m}$</li>
          <li>Rotational speed, $N = 120\\text{ rpm}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Calculation:</div>
        $$\\omega = \\frac{2\\pi \\times 120}{60} = 4\\pi \\approx 12.566\\text{ rad/s}$$
        $$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 0.10 \\times (0.10)^2 = 5.0 \\times 10^{-4}\\text{ kg}\\cdot\\text{m}^2$$
        $$K_{rot} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\times (5.0 \\times 10^{-4}) \\times (4\\pi)^2$$
        $$K_{rot} = 2.5 \\times 10^{-4} \\times 157.9137 \\approx 0.03948\\text{ Joules} = 3.95 \\times 10^{-2}\\text{ J}$$
      </div>
    `,
    shortcut: "I = 0.5 * 0.1 * 0.1^2 = 5e-4; K = 0.5 * 5e-4 * (4*pi)^2 = 0.0395 J",
    finalAnswer: "Rotational Kinetic Energy K_rot = 3.95 × 10⁻² J (or 0.0395 J)"
  },
  {
    id: "ex-s23-1c",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Spring 2023",
    qNumber: "Spring 2023 | Q. 1(c)",
    title: "Flywheel of Mass 150 kg & Radius 0.5 m at 30 rev/s: Angular Velocity & Moment of Inertia",
    tags: ["Spring 2023", "Flywheel", "CLO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Flywheel Angular Velocity & Moment of Inertia:</strong>
      $$\\omega = 2\\pi n, \\quad I = M R^2 \\text{ (rim model)}$$
      <span class="mem-hook">💡 Frequency $n = 30\\text{ rev/s} \\implies \\omega = 60\\pi\\text{ rad/s} \\approx 188.5\\text{ rad/s}$.</span>
    `,
    definition: "A flywheel of mass $150\\text{ kg}$ and radius $0.5\\text{ m}$ makes $30\\text{ revolutions per second}$. Calculate angular velocity and moment of inertia. [IIUC Spring-2023, CLO2, Marks: 03]",
    basicIdea: "Angular velocity is $\\omega = 2\\pi n$. Moment of inertia for mass concentrated at rim is $I = M R^2$.",
    banglaIntuition: "প্রতি সেকেন্ডে ৩০ আবর্তনে কৌণিক বেগ $\\omega = 2\\pi \\times 30 = 60\\pi \\approx 188.5\\text{ rad/s}$। পরিধিতে ভর কেন্দ্রীভূত ধরা হলে জড়তার ভ্রামক $I = M R^2 = 37.5\\text{ kg}\\cdot\\text{m}^2$।",
    importantFormula: "1. $\\omega = 2\\pi n$\\n2. $I = M R^2$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of flywheel, $M = 150\\text{ kg}$</li>
          <li>Radius of flywheel, $R = 0.5\\text{ m}$</li>
          <li>Frequency, $n = 30\\text{ rev/s}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Calculation:</div>
        <p><strong>(i) Angular Velocity ($\\omega$):</strong></p>
        $$\\omega = 2\\pi n = 2\\pi \\times 30 = 60\\pi \\approx 188.496\\text{ rad/s}$$

        <p><strong>(ii) Moment of Inertia ($I$):</strong></p>
        <p>Assuming mass concentrated at the rim:</p>
        $$I = M R^2 = 150\\text{ kg} \\times (0.5\\text{ m})^2 = 150 \\times 0.25 = 37.5\\text{ kg}\\cdot\\text{m}^2$$
        <p><em>(Note: If treated as solid uniform disc, $I = \\frac{1}{2} M R^2 = 18.75\\text{ kg}\\cdot\\text{m}^2$)</em></p>
      </div>
    `,
    shortcut: "omega = 2*pi*30 = 188.5 rad/s; I = 150 * 0.5^2 = 37.5 kg·m²",
    finalAnswer: "ω = 188.5 rad/s (60π rad/s) | I = 37.5 kg·m² (rim) / 18.75 kg·m² (disc)"
  },

  {
    id: "ex-s23-2c",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "numerical",
    examPaper: "Spring 2023",
    qNumber: "Spring 2023 | Q. 2(c)",
    title: "Moon Surface Gravity: Calculate g_m if Radius is 1/4 and Mass is 1/80 of Earth",
    tags: ["Spring 2023", "Gravity", "CLO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Surface Gravity Ratio Formula:</strong>
      Surface gravity depends on mass and radius squared: $g = G\\frac{M}{R^2}$.
      $$\\frac{g_m}{g_e} = \\left(\\frac{M_m}{M_e}\\right) \\times \\left(\\frac{R_e}{R_m}\\right)^2 = \\frac{1}{80} \\times 4^2 = \\frac{16}{80} = 0.20 \\implies g_m = 1.96\\text{ m/s}^2$$
      <span class="mem-hook">💡 Quick Exam Rule: $\\frac{1}{80} \\times 16 = \\frac{1}{5}$. Multiply $9.8$ by $1/5$ to get $1.96\\text{ m/s}^2$.</span>
    `,
    definition: "What will be the acceleration due to gravity on the surface of the moon if its radius were $1/4^{\\text{th}}$ radius of earth and mass $1/80^{\\text{th}}$ of the mass of earth? [IIUC Spring-2023, CLO2, Marks: 03]",
    basicIdea: "Use ratio method for $g = GM/R^2$. Substitute $M_m/M_e = 1/80$ and $R_m/R_e = 1/4$ to find $g_m = 0.20 g_e$.",
    banglaIntuition: "মহাকর্ষীয় ত্বরণের সূত্র $g = \\frac{GM}{R^2}$। অনুপাত নিলে: $\\frac{g_m}{g_e} = \\frac{M_m}{M_e} \\times \\left(\\frac{R_e}{R_m}\\right)^2 = \\frac{1}{80} \\times (4)^2 = \\frac{16}{80} = \\frac{1}{5}$। অতএব চাঁদের ত্বরণ $g_m = 9.8 / 5 = 1.96\\text{ m/s}^2$।",
    importantFormula: "g = \\frac{GM}{R^2} \\implies g_m = g_e \\left(\\frac{M_m}{M_e}\\right) \\left(\\frac{R_e}{R_m}\\right)^2",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 2(c)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Conditions:</div>
        <ul>
          <li>Radius of the Moon, $R_m = \\frac{1}{4} R_e \\implies \\frac{R_e}{R_m} = 4$</li>
          <li>Mass of the Moon, $M_m = \\frac{1}{80} M_e \\implies \\frac{M_m}{M_e} = \\frac{1}{80}$</li>
          <li>Standard acceleration due to gravity on Earth, $g_e = 9.8\\text{ m/s}^2$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Relevant Governing Formula:</div>
        $$g = \\frac{G M}{R^2}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Ratio & Evaluation:</div>
        $$\\frac{g_m}{g_e} = \\frac{G M_m / R_m^2}{G M_e / R_e^2} = \\left(\\frac{M_m}{M_e}\\right) \\times \\left(\\frac{R_e}{R_m}\\right)^2$$
        $$\\frac{g_m}{g_e} = \\left(\\frac{1}{80}\\right) \\times (4)^2 = \\frac{16}{80} = \\frac{1}{5} = 0.20$$
        $$g_m = 0.20 \\times g_e = 0.20 \\times 9.8\\text{ m/s}^2 = 1.96\\text{ m/s}^2$$
      </div>
    `,
    shortcut: "g_m = (1/80) * (4)^2 * 9.8 = 1.96 m/s².",
    finalAnswer: "Acceleration due to gravity on Moon surface g_m = 1.96 m/s²"
  },
  {
    id: "ex-s23-2cor",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "numerical",
    examPaper: "Spring 2023",
    qNumber: "Spring 2023 | Q. 2(c) OR",
    title: "Circular Disc of Mass 10⁵ kg & Radius 0.5 m: Moment of Inertia & Radius of Gyration",
    tags: ["Spring 2023", "Rigid Body", "CLO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Circular Disc Moment of Inertia & Radius of Gyration:</strong>
      $$I = \\frac{1}{2} M R^2, \\quad k = \\sqrt{\\frac{I}{M}} = \\frac{R}{\\sqrt{2}}$$
      <span class="mem-hook">💡 Direct Formula: For any uniform circular disc, $k = R / \\sqrt{2} = 0.5 / 1.414 \\approx 0.354\\text{ m}$.</span>
    `,
    definition: "The mass and radius of a circular disc are $10^5\\text{ kg}$ and $0.5\\text{ m}$ respectively. Determine the moment of inertia and radius of gyration of the circular disc. [IIUC Spring-2023, CLO2, Marks: 03]",
    basicIdea: "For a circular disc, $I = \\frac{1}{2} M R^2$. Radius of gyration is $k = \\sqrt{I/M} = R/\\sqrt{2}$.",
    banglaIntuition: "চাকতির জড়তার ভ্রামক $I = \\frac{1}{2} M R^2 = 12,500\\text{ kg}\\cdot\\text{m}^2$ এবং চক্রগতির ব্যাসার্ধ $k = \\frac{R}{\\sqrt{2}} = 0.3536\\text{ m}$।",
    importantFormula: "1. $I = \\frac{1}{2} M R^2$\\n2. $k = \\frac{R}{\\sqrt{2}}$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 2(c) [OR]</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Given Parameters:</div>
        <ul>
          <li>Mass of the disc, $M = 10^5\\text{ kg}$</li>
          <li>Radius of the disc, $R = 0.5\\text{ m}$</li>
        </ul>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Calculation:</div>
        <p><strong>(i) Moment of Inertia ($I$):</strong></p>
        $$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 10^5 \\times (0.5)^2 = \\frac{1}{2} \\times 10^5 \\times 0.25 = 12,500\\text{ kg}\\cdot\\text{m}^2 = 1.25 \\times 10^4\\text{ kg}\\cdot\\text{m}^2$$

        <p><strong>(ii) Radius of Gyration ($k$):</strong></p>
        $$k = \\sqrt{\\frac{I}{M}} = \\sqrt{\\frac{12,500}{10^5}} = \\sqrt{0.125} = \\frac{0.5}{\\sqrt{2}} \\approx 0.3536\\text{ m}$$
      </div>
    `,
    shortcut: "I = 0.5 * 10^5 * 0.25 = 12,500 kg·m²; k = 0.5 / sqrt(2) = 0.3536 m",
    finalAnswer: "I = 12,500 kg·m² (1.25 × 10⁴ kg·m²) | k = 0.3536 m"
  },
  {
    id: "ex-s23-3c",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "definition",
    examPaper: "Spring 2023",
    qNumber: "Spring 2023 | Q. 3(c)",
    title: "Fundamental Physical Properties and Postulates of Wave Function ψ in Quantum Mechanics",
    tags: ["Spring 2023", "Quantum", "CLO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>The 4 Essential Properties of Wave Function $\\psi$:</strong><br>
      1. <strong>Single-Valued:</strong> Must have only one probability at any point.<br>
      2. <strong>Continuous:</strong> Smooth with continuous first derivative $\\frac{d\\psi}{dx}$.<br>
      3. <strong>Finite Everywhere:</strong> Cannot blow up to infinity.<br>
      4. <strong>Normalizable:</strong> Total probability across all space must equal 1 ($\\int |\\psi|^2 dV = 1$).
      <span class="mem-hook">💡 Exam Memory Hook: S-C-F-N (Single, Continuous, Finite, Normalized).</span>
    `,
    definition: "Write the properties of wave function $\\psi$ in quantum mechanics. [IIUC Spring-2023, CLO2, Marks: 03]",
    basicIdea: "For $\\psi$ to represent a physically realizable quantum state, it must be single-valued, continuous, quadratically integrable (finite), and normalized.",
    banglaIntuition: "একটি গ্রহণযোগ্য তরঙ্গ অপেক্ষকের ৪টি বৈশিষ্ট্য থাকতে হবে: এটি একক-মানবিশিষ্ট (single-valued), অবিচ্ছিন্ন (continuous), সসীম (finite), এবং প্রমিতযোগ্য বা নরমালাইজড ($\\int |\\psi|^2 dV = 1$) হতে হবে।",
    importantFormula: "$\\int_{-\\infty}^{\\infty} |\\psi|^2 dV = 1$",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 3(c)</div>

      <div class="exam-script-step">
        <p>For a wave function $\\psi(\\vec{r}, t)$ to be physically acceptable (well-behaved), it must satisfy four essential boundary conditions:</p>
        <ol style="margin-left: 1.5rem; line-height: 1.8;">
          <li><strong>Single-Valued:</strong> $\\psi$ must have only one unique value at any given spatial coordinate $(x, y, z)$ at time $t$, ensuring probability $|\psi|^2$ is uniquely defined.</li>
          <li><strong>Continuous:</strong> Both $\\psi$ and its spatial derivatives $\\frac{\\partial\\psi}{\\partial x}$ must be continuous everywhere, ensuring continuous particle momentum and flux.</li>
          <li><strong>Finite Everywhere:</strong> $\\psi$ cannot tend to $\\pm\\infty$ at any point or boundary, as infinite probability density is physically impossible.</li>
          <li><strong>Square-Integrable (Normalized):</strong> The integral over all space must be finite, normalized such that:
          $$\\int_{-\\infty}^{\\infty} |\\psi(\\vec{r}, t)|^2 dV = 1$$
          meaning the probability of finding the particle somewhere in the universe is exactly $100\\%$.</li>
        </ol>
      </div>
    `,
    finalAnswer: "Single-valued, continuous with continuous derivative, finite everywhere, and normalized."
  },

  {
    id: "ex-s22-1a",
    chapter: "Chapter 1",
    category: "rigid-body",
    contentType: "definition",
    examPaper: "Spring 2022",
    qNumber: "Spring 2022 | Q. 1(a)",
    title: "Practical Uses and Industrial Applications of a Flywheel",
    tags: ["Spring 2022", "Flywheel Uses", "CLO-1", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Practical Uses of a Flywheel:</strong>
      A flywheel is a high-inertia mechanical battery that stores rotational kinetic energy ($E = \\frac{1}{2} I \\omega^2$) during surplus production and releases it during peak demand.
      <span class="mem-hook">💡 4 Key Uses: 1. IC Engines (power smoothing), 2. Punching/Stamping presses, 3. Regenerative Braking (KERS), 4. Electrical Grid UPS.</span>
    `,
    definition: "What are the practical uses of a flywheel? [IIUC Spring-2022, CLO1, Marks: 03]",
    basicIdea: "Explain the governing physical principle (fluctuation mitigation via high moment of inertia) followed by 4 distinct, real-world engineering applications.",
    banglaIntuition: "ফ্লাইহুইল মূলত একটি ঘূর্ণনশীল যান্ত্রিক ব্যাটারি। প্রধান ৪টি ব্যবহার: ১. আইসি ইঞ্জিনের ঝাঁকুনি দূর করে মসৃণ গতি বজায় রাখা, ২. পাঞ্চিং ও মেটাল প্রেসে তাৎক্ষণিক তীব্র শক্তি সরবরাহ, ৩. যানবাহনে ব্রেকিং এনার্জি পুনরুদ্ধার (KERS), ৪. পাওয়ার গ্রিডে বিদ্যুৎ বিভ্রাট চলাকালে ফ্রিকোয়েন্সি স্থিতিশীল রাখা।",
    importantFormula: "E_{stored} = \\frac{1}{2} I \\omega^2, \\quad \\Delta E = I \\omega_{mean} (\\omega_{max} - \\omega_{min})",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 1(a)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Fundamental Engineering Principle:</div>
        <p>A <strong>flywheel</strong> is a heavy mechanical device with a large moment of inertia ($I$). It acts as a mechanical energy reservoir by storing rotational kinetic energy ($E = \\frac{1}{2} I \\omega^2$) when mechanical supply exceeds load, and releasing it when load exceeds power supply, thereby minimizing angular velocity fluctuations.</p>
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Four Major Practical Applications:</div>
        <ol style="margin-left:1.5rem; line-height:1.9;">
          <li><strong>Internal Combustion (IC) Engines:</strong> In 4-stroke automobile engines, power is generated exclusively during the single power stroke. The flywheel absorbs excess energy during this stroke and powers the crankshaft smoothly through the idle strokes (intake, compression, exhaust).</li>
          <li><strong>Industrial Punching & Shearing Presses:</strong> Heavy metal punching and stamping machines require gigantic peak energy for a fraction of a second. A flywheel absorbs steady energy from an economical low-power electric motor and releases enormous instantaneous torque during stamping.</li>
          <li><strong>Kinetic Energy Recovery Systems (KERS / Hybrid Vehicles):</strong> Modern high-speed carbon-composite flywheels rotating in vacuum recover vehicle kinetic energy during braking and discharge it to accelerate the vehicle, drastically saving fuel.</li>
          <li><strong>Uninterruptible Power Supplies (UPS) & Electrical Grids:</strong> Advanced flywheel energy storage units (FES) provide instantaneous frequency regulation and bridge power during micro-outages before standby diesel generators fire up.</li>
        </ol>
      </div>
    `,
    finalAnswer: "All 4 industrial uses of a flywheel explained with energy buffering equations."
  },

  {
    id: "ex-s22-2a",
    chapter: "Chapter 2",
    category: "gravity",
    contentType: "derivation",
    examPaper: "Spring 2022",
    qNumber: "Spring 2022 | Q. 2(a)",
    title: "Kepler's Second Law: Prove Why Earth Moves Faster in December Than in June",
    tags: ["Spring 2022", "Kepler's Law", "CLO-1", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Kepler's Second Law (Areal Velocity):</strong>
      A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time ($dA/dt = \\text{const}$).
      <span class="mem-hook">💡 Direct Proof: Angular momentum $L = m r v = \\text{const} \\implies v \\propto 1/r$. In December Earth is closest (perihelion), so it must move fastest!</span>
    `,
    definition: "Use Kepler’s second law to convince yourself that the Earth must move faster in its orbit during December, when it is closest to the Sun, than during June, when it is farthest from the Sun. [IIUC Spring-2022, CLO1, Marks: 03]",
    basicIdea: "State Kepler's Law of Areas, prove that areal velocity conservation implies conservation of angular momentum ($v \\propto 1/r$), and contrast the Earth-Sun distances in December (perihelion) vs June (aphelion).",
    banglaIntuition: "কেপলারের ২য় সূত্রানুযায়ী ক্ষেত্রফলীয় বেগ ধ্রুবক, যার অর্থ কৌণিক ভরবেগ $L = m r v$ সংরক্ষিত। সুতরাং রৈখিক বেগ দূরত্বের ব্যস্তানুপাতিক ($v \\propto 1/r$)। ডিসেম্বরে পৃথিবী সূর্যের সবচেয়ে কাছে থাকে (অনুসূর), তাই এর বেগ জুনের (অপসূর) চেয়ে বেশি হতে বাধ্য।",
    importantFormula: "\\frac{dA}{dt} = \\frac{L}{2m} = \\text{Const} \\implies v \\propto \\frac{1}{r} \\implies v_{Dec} > v_{June}",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 2(a)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Statement of Kepler's Second Law (Law of Areas):</div>
        <p>The radius vector drawn from the Sun to the Earth sweeps out equal areas in equal intervals of time. That is, the <strong>areal velocity</strong> is invariant:</p>
        $$\\frac{dA}{dt} = \\text{Constant}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Mathematical Derivation via Angular Momentum:</div>
        <p>Consider the Earth of mass $m$ moving through an infinitesimal angle $d\\theta$ in time $dt$. The differential area $dA$ swept out is:</p>
        $$dA = \\frac{1}{2} r (r d\\theta) = \\frac{1}{2} r^2 d\\theta$$
        $$\\frac{dA}{dt} = \\frac{1}{2} r^2 \\frac{d\\theta}{dt} = \\frac{1}{2} r^2 \\omega$$
        <p>Since linear tangential velocity is $v = r\\omega$, and angular momentum is $L = m r^2 \\omega = m r v$:</p>
        $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{Constant}$$
        <p>Because the gravitational force exerted by the Sun is a purely central force (torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}_g = 0$), the orbital angular momentum $L$ is strictly conserved:</p>
        $$L = m r v = \\text{constant} \\implies v = \\frac{L}{m} \\cdot \\frac{1}{r}$$
        <p>Thus, the orbital speed $v$ is <strong>inversely proportional</strong> to the distance $r$ from the Sun:</p>
        $$v \\propto \\frac{1}{r}$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. Physical Conclusion for December vs. June:</div>
        <ul>
          <li>In <strong>December / early January</strong> (near Perihelion), Earth is at its minimum distance from the Sun: $r_{Dec} \\approx 1.471 \\times 10^{11}\\text{ m}$.</li>
          <li>In <strong>June / early July</strong> (near Aphelion), Earth is at its maximum distance from the Sun: $r_{June} \\approx 1.521 \\times 10^{11}\\text{ m}$.</li>
        </ul>
        <p>Because $r_{Dec} < r_{June}$, it follows conclusively that:</p>
        $$v_{Dec} > v_{June}$$
        <p>Earth moves at approximately $30.3\\text{ km/s}$ in December compared to $29.3\\text{ km/s}$ in June. $\\blacksquare$</p>
      </div>
    `,
    finalAnswer: "Proven: v ∝ 1/r, so Earth moves faster in December (perihelion) than in June (aphelion)."
  },

  {
    id: "ex-s22-3b",
    chapter: "Chapter 3",
    category: "quantum",
    contentType: "derivation",
    examPaper: "Spring 2022",
    qNumber: "Spring 2022 | Q. 3(b)",
    title: "Solve Schrödinger Equation for Free Electrons in Potential-Free Space (V = 0)",
    tags: ["Spring 2022", "Free Particle", "Schrödinger", "CLO-2", "3 Marks", "Board Exam"],
    easyDefinition: `
      <strong>Free Particle in Potential-Free Space ($V = 0$):</strong>
      When $V = 0$, Schrödinger equation becomes $\\frac{d^2\\psi}{dx^2} + k^2\\psi = 0$ where $k = \\frac{\\sqrt{2mE}}{\\hbar}$.
      The forward propagating wave solution is $\\psi(x) = A e^{ikx}$.
      <span class="mem-hook">💡 Direct Solution: Energy is non-quantized and continuous: $E = \\frac{\\hbar^2 k^2}{2m} = \\frac{p^2}{2m}$.</span>
    `,
    definition: "Solve the Schrödinger equation for electrons which propagate freely, i.e., in a potential-free space in the positive x-direction. [IIUC Spring-2022, CLO2, Marks: 03]",
    basicIdea: "Set $V(x) = 0$ in the 1D steady-state Schrödinger equation, define wave number $k = \\sqrt{2mE}/\\hbar$, state the harmonic exponential solution, and set the backward reflection coefficient $B = 0$ for positive propagation.",
    banglaIntuition: "বিভব-মুক্ত স্থানে বিভব শক্তি $V = 0$। ফলে সময়-নিরপেক্ষ শ্রোডিঙ্গার সমীকরণ দাঁড়ায় $\\frac{d^2\\psi}{dx^2} + k^2\\psi = 0$ যেখানে $k = \\frac{\\sqrt{2mE}}{\\hbar}$। যেহেতু কণাটি শুধুমাত্র ধনাত্মক $x$-অক্ষে গতিশীল, তাই প্রতিফলিত তরঙ্গ অনুপস্থিত ($B = 0$) এবং সমাধান $\\psi(x) = A e^{ikx}$।",
    importantFormula: "\\frac{d^2\\psi}{dx^2} + k^2\\psi = 0 \\implies \\psi(x) = A e^{ikx} \\quad (k = \\frac{\\sqrt{2mE}}{\\hbar})",
    stepByStepSolution: `
      <div class="exam-khata-header">Answer to the Question No. 3(b)</div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">1. Formulation of the Wave Equation:</div>
        <p>The time-independent Schrödinger wave equation for a particle of mass $m$ in one dimension is:</p>
        $$\\frac{d^2\\psi}{dx^2} + \\frac{2m}{\\hbar^2}[E - V(x)]\\psi = 0$$
        <p>For an electron propagating in a <strong>potential-free space</strong>, the potential energy is identically zero everywhere:</p>
        $$V(x) = 0$$
        <p>Substituting $V(x) = 0$ into the equation yields:</p>
        $$\\frac{d^2\\psi}{dx^2} + \\frac{2mE}{\\hbar^2}\\psi = 0$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">2. Definition of the Wave Vector ($k$):</div>
        <p>Let us define the constant parameter $k$ such that:</p>
        $$k^2 = \\frac{2mE}{\\hbar^2} \\implies k = \\frac{\\sqrt{2mE}}{\\hbar} = \\frac{p}{\\hbar}$$
        <p>The differential equation becomes the standard harmonic oscillator equation:</p>
        $$\\frac{d^2\\psi}{dx^2} + k^2\\psi = 0$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">3. General Solution & Boundary Propagation:</div>
        <p>The general mathematical solution of this second-order linear differential equation is:</p>
        $$\\psi(x) = A e^{ikx} + B e^{-ikx}$$
        <p>where:</p>
        <ul>
          <li>$A e^{ikx}$ represents a plane matter wave propagating in the <strong>positive $x$-direction</strong>.</li>
          <li>$B e^{-ikx}$ represents a plane wave propagating in the <strong>negative $x$-direction</strong>.</li>
        </ul>
        <p>Since the problem specifies that the electron propagates strictly in the <strong>positive $x$-direction</strong> in an unbounded space, there is zero reflection ($B = 0$). Hence:</p>
        $$\\psi(x) = A e^{ikx}$$
        <p>Including the temporal phase factor $e^{-iEt/\\hbar} = e^{-i\\omega t}$, the complete physical wave function is:</p>
        $$\\Psi(x, t) = A e^{i(kx - \\omega t)} \\quad \\blacksquare$$
      </div>

      <div class="exam-script-step">
        <div class="exam-script-step-title">4. Physical Significance:</div>
        <p>Unlike bound particles, a free electron has a <strong>continuous energy spectrum</strong> ($E = \\frac{\\hbar^2 k^2}{2m} > 0$), meaning its energy is unquantized and it can take any positive real value.</p>
      </div>
    `,
    finalAnswer: "Complete Solution: ψ(x) = A e^(ikx) with continuous energy spectrum E = ħ²k²/(2m)."
  }
];

// Universal Physics Constants & Conversion Modal
const physicsConstantsData = `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
    <div class="modal-info-card">
      <h4 style="color: var(--accent-primary); margin-bottom: 0.75rem;"><i class="fa-solid fa-atom"></i> Universal Physical Constants</h4>
      <ul style="list-style: none; line-height: 2; font-size: 0.95rem;">
        <li><strong>Gravitational Constant ($G$):</strong> $6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$</li>
        <li><strong>Planck's Constant ($h$):</strong> $6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        <li><strong>Reduced Planck Constant ($\\hbar$):</strong> $1.0546 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$</li>
        <li><strong>Speed of Light in Vacuum ($c$):</strong> $3.00 \\times 10^8\\text{ m/s}$</li>
        <li><strong>Elementary Charge ($e$):</strong> $1.602 \\times 10^{-19}\\text{ C}$</li>
        <li><strong>Electron Mass ($m_e$):</strong> $9.109 \\times 10^{-31}\\text{ kg}$</li>
        <li><strong>Proton Mass ($m_p$):</strong> $1.673 \\times 10^{-27}\\text{ kg}$</li>
        <li><strong>Neutron Mass ($m_n$):</strong> $1.675 \\times 10^{-27}\\text{ kg}$</li>
      </ul>
    </div>

    <div class="modal-info-card">
      <h4 style="color: var(--accent-amber); margin-bottom: 0.75rem;"><i class="fa-solid fa-globe"></i> Astronomical Parameters</h4>
      <ul style="list-style: none; line-height: 2; font-size: 0.95rem;">
        <li><strong>Earth Mass ($M_E$):</strong> $5.98 \\times 10^{24}\\text{ kg} \\approx 6.0 \\times 10^{24}\\text{ kg}$</li>
        <li><strong>Earth Radius ($R_E$):</strong> $6.37 \\times 10^6\\text{ m} \\approx 6.0 \\times 10^6\\text{ m}$</li>
        <li><strong>Earth Surface Gravity ($g$):</strong> $9.8\\text{ m/s}^2$</li>
        <li><strong>Moon Mass ($M_M$):</strong> $7.40 \\times 10^{22}\\text{ kg}$</li>
        <li><strong>Moon Radius ($R_M$):</strong> $1.74 \\times 10^6\\text{ m} = 1740\\text{ km}$</li>
        <li><strong>Moon Surface Gravity ($g_m$):</strong> $1.62\\text{ m/s}^2$</li>
        <li><strong>Sun Mass ($M_\\odot$):</strong> $1.99 \\times 10^{30}\\text{ kg}$</li>
        <li><strong>Earth-Sun Distance ($1\\text{ AU}$):</strong> $1.50 \\times 10^{11}\\text{ m} = 150 \\times 10^6\\text{ km}$</li>
      </ul>
    </div>
  </div>

  <div class="modal-unit-conversion">
    <h4 style="color: var(--accent-primary); margin-bottom: 0.6rem;"><i class="fa-solid fa-bolt"></i> Crucial Unit Conversions for Mid Exam:</h4>
    <p>1. $1\\text{ eV} = 1.602 \\times 10^{-19}\\text{ J} \\quad \\Longleftrightarrow \\quad 1\\text{ MeV} = 10^6\\text{ eV} = 1.602 \\times 10^{-13}\\text{ J}$</p>
    <p>2. $1\\text{ rpm} = \\frac{2\\pi}{60}\\text{ rad/s} = \\frac{\\pi}{30}\\text{ rad/s} \\approx 0.10472\\text{ rad/s}$</p>
    <p>3. $1\\text{ km} = 10^3\\text{ m} \\quad | \\quad 1\\text{ cm} = 10^{-2}\\text{ m} \\quad | \\quad 1\\text{ day} = 86,400\\text{ seconds}$</p>
  </div>
`;

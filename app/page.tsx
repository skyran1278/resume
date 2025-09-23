export default function Home() {
  return (
    <main className="bg-gray-100 p-8 text-gray-800">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <header className="mb-8">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold">You-Ran Nai (Paul)</h1>
          </div>
          <div className="text-center text-sm text-gray-600">
            <div>Phone: (+886) 920-785-026</div>
            <div>Email: cv@u-ran.com</div>
            <div>
              GitHub:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/skyran1278"
                className="text-blue-600 hover:underline"
              >
                github.com/skyran1278
              </a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Summary</h2>
          <p className="leading-relaxed">
            Experienced Software Developer with 9+ years in web, desktop, and
            cloud infrastructure development. Skilled in object-oriented design
            and system modernization, delivering high-performance and scalable
            solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded bg-gray-200 px-2 py-1">C++</span>
            <span className="rounded bg-gray-200 px-2 py-1">TypeScript</span>
            <span className="rounded bg-gray-200 px-2 py-1">Python</span>
            <span className="rounded bg-gray-200 px-2 py-1">GraphQL</span>
            <span className="rounded bg-gray-200 px-2 py-1">Message Queue</span>
            <span className="rounded bg-gray-200 px-2 py-1">NestJS</span>
            <span className="rounded bg-gray-200 px-2 py-1">TypeORM</span>
            <span className="rounded bg-gray-200 px-2 py-1">PostgreSQL</span>
            <span className="rounded bg-gray-200 px-2 py-1">MongoDB</span>
            <span className="rounded bg-gray-200 px-2 py-1">AWS</span>
            <span className="rounded bg-gray-200 px-2 py-1">React</span>
            <span className="rounded bg-gray-200 px-2 py-1">Node.js</span>
            <span className="rounded bg-gray-200 px-2 py-1">RESTful APIs</span>
            <span className="rounded bg-gray-200 px-2 py-1">Websocket</span>
            <span className="rounded bg-gray-200 px-2 py-1">Jest</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Experiences</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">4i Tech</h3>
            <div className="text-sm text-gray-600">
              <div>Senior Software Engineer</div>
              <div>Jun 2023 - Present</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Developed business process management tools for the media
                industry using TypeScript, GraphQL, and PostgreSQL, including
                role-based and claim-based authorization.
              </li>
              <li>
                Architected service-to-service communication using Message
                Queues for scalable, reliable workflows.
              </li>
              <li>
                Developed real-time and predictive video/image processing
                applications using OpenCV, Agora, and TensorFlow.
              </li>
              <li>
                Implemented scalable cloud infrastructure on AWS using CDK.
              </li>
              <li>
                Contributed to open-source projects like TypeORM, enhancing
                production reliability.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">RCAD Inc.</h3>
            <div className="text-sm text-gray-600">
              <div>Senior Software Engineer</div>
              <div>Aug 2020 - Jun 2023</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Developed 3D application using Visual C++ and MFC following
                object-oriented principles.
              </li>
              <li>
                Optimized polygon partition algorithms, surpassing open-source
                performance benchmarks.
              </li>
              <li>
                Migrated legacy applications to Unicode and implemented robust
                integration tests for system stability.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Elements Structure Inc.</h3>
            <div className="text-sm text-gray-600">
              <div>Full Stack Engineer</div>
              <div>Aug 2019 - Aug 2020</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Developed a full-featured member management system using React,
                Redux, WebSocket, and MongoDB with multi-channel notifications
                (email, Line).
              </li>
              <li>
                Led migration to AWS auto-scaling infrastructure and implemented
                multi-tenant architecture to support multiple clients.
              </li>
              <li>
                Collaborated with NTU Labs to build visual analytics solutions
                using GCP Vision API and PyTorch.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Elements Structure Inc.</h3>
            <div className="text-sm text-gray-600">
              <div>Full Stack Engineer (Internship)</div>
              <div>Jun 2016 - Jul 2019</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Worked with RCAD Inc. to developed an on-site management system
                using a NoSQL cloud database and OAuth 2.0.
              </li>
              <li>
                Optimized steel structure and SRC components using clustering,
                Newton&apos;s method, and slide algorithms.
              </li>
              <li>
                Accelerated angle radius calculations by 400x, significantly
                improving computational performance.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">National Taiwan University</h3>
            <div className="text-sm text-gray-600">
              <div>Master&apos;s degree, Structural Engineering</div>
              <div>2017 - 2019</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Thesis:{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.airitilibrary.com/Article/Detail/U0001-2807201900030400"
                  className="text-blue-600 hover:underline"
                >
                  &quot;Feasibility of Beam Reinforcement Optimization for
                  Practical Application&quot;
                </a>{' '}
                - developed algorithms for structural optimization.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">National Taiwan University</h3>
            <div className="text-sm text-gray-600">
              <div>Bachelor&apos;s degree, Civil Engineering</div>
              <div>2013 - 2017</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Awarded Gold Medal in CSX 2003 Website Database Programming.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Side Projects</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.raycast.com/u-ran/stretchly"
                className="text-blue-600 hover:underline"
              >
                stretchly-raycast
              </a>
              : Built a Raycast extension using TypeScript.
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets"
                className="text-blue-600 hover:underline"
              >
                js-jsx-snippets
              </a>
              : Built a VSCode extension achieving over 1.2M downloads.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-100 p-8 text-gray-800">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <header className="mb-8">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold">You-Ran Nai</h1>
          </div>
          <div className="text-center text-sm text-gray-600">
            <div>Phone: (+886) 920-785-026</div>
            <div>Email: nai@u-ran.com</div>
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
            Experienced Software Developer with 6+ years in web, desktop, and
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
                industry using TypeScript, GraphQL, and PostgreSQL.
              </li>
              <li>
                Built application architecture utilizing Message Queue for
                service-to-service communication.
              </li>
              <li>
                Contributed code and issue resolutions to open-source projects
                like TypeORM, strengthening the reliability of our production
                stack.
              </li>
              <li>
                Developed a real-time video processing application using OpenCV
                and Agora.
              </li>
              <li>
                Implemented role-based and claim-based authorization mechanisms.
              </li>
              <li>Built scalable cloud infrastructure using AWS CDK.</li>
              <li>
                Using TensorFlow to build predictive models for image
                recognition.
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
                Designed and developed 3D application modules using Visual C++
                and MFC, applying object-oriented design principles.
              </li>
              <li>
                Reviewed academic papers and implemented polygon partition
                algorithms, achieving performance improvements surpassing
                open-source solutions.
              </li>
              <li>Migrated applications from multi-byte to Unicode.</li>
              <li>
                Developed comprehensive integration tests for legacy systems.
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
                Created a full-featured member management system with React,
                Redux, Websocket and MongoDB.
              </li>
              <li>
                Developed and integrated multiple notification channels (email,
                line).
              </li>
              <li>
                Led the migration from a self-hosted Linux environment to an AWS
                auto-scaling infrastructure.
              </li>
              <li>
                Implemented a multi-tenant architecture to support multiple
                clients within the infrastructure.
              </li>
              <li>
                Integrated GCP Vision API with PyTorch for visual analytics.
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
                using a NoSQL cloud database and OAuth 2.0 for authentication.
              </li>
              <li>
                Optimized steel structure members using clustering algorithms.
              </li>
              <li>
                Designed SRC using Newton&apos;s method and a slide algorithm.
              </li>
              <li>
                Optimized angle radius calculations, increasing speed by 400
                times faster than the previous version.
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
                Awarded Gold Medal in CSX 2003 Website Database Programming
                (used Azure, Node.js, and Express.js to build a website and
                Chrome extension).
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
              : Built a VSCode extension for React/Redux in JavaScript with
              Babel and ES7 syntax, achieving over 1M downloads.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

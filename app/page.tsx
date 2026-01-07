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
          <div className="space-y-3 leading-relaxed">
            <p>
              Senior Software Engineer with 9+ years bridging modern web
              platforms, cloud infrastructure, and high-performance C++
              applications. Blend product thinking with deep technical ownership
              to ship reliable systems end to end.
            </p>
          </div>
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
            <h3 className="text-lg font-medium">Senior Software Engineer</h3>
            <div className="text-sm text-gray-600">
              <div>
                4i Tech - An international company specializing in custom
                software development
              </div>
              <div>Jun 2023 - Oct 2025</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Delivered a business process management suite for media
                operations with NestJS, GraphQL, and PostgreSQL, introducing
                role- and claim-based authorization that protects sensitive
                editorial workflows.
              </li>
              <li>
                Architected service-to-service communication via message queues
                for scalable, reliable workflows.
              </li>
              <li>
                Codified AWS infrastructure with CDK, enabling repeatable
                deployments and scalable environments for new clients.
              </li>
              <li>
                Contributed to open-source projects like TypeORM and internal
                libraries, raising stability across shared services.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Senior Software Engineer</h3>
            <div className="text-sm text-gray-600">
              <div>
                RCAD Inc. - A software company that provides 3D analysis tools
                for structural engineering
              </div>
              <div>Aug 2020 - Jun 2023</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Engineered a high-performance 3D structural design application
                in Visual C++ and MFC, implementing SOLID principles to balance
                extensibility and performance.
              </li>
              <li>
                Optimized polygon partition algorithms to achieve superior
                performance compared to open-source implementations on complex
                geometric computations.
              </li>
              <li>
                Migrated legacy codebases to Unicode and built a suite of
                integration tests, eliminating regressions in global releases.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Full Stack Engineer</h3>
            <div className="text-sm text-gray-600">
              <div>
                Elements Structure Inc. - A consulting company that specializes
                in structural engineering
              </div>
              <div>Aug 2019 - Aug 2020</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Launched a full-featured member management platform with React,
                Redux, WebSocket, and MongoDB, delivering real-time
                notifications across email and Line.
              </li>
              <li>
                Led migration to auto-scaling AWS infrastructure and designed a
                multi-tenant architecture that isolates client workloads.
              </li>
              <li>
                Partnered with NTU Labs to build visual analytics using GCP
                Vision API and PyTorch, turning research insights into product
                features.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Full Stack Engineer (Internship)
            </h3>
            <div className="text-sm text-gray-600">
              <div>Elements Structure Inc.</div>
              <div>Jun 2016 - Jul 2019</div>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Co-developed an on-site management system with RCAD Inc. using a
                NoSQL cloud database and OAuth 2.0, aligning contractor data in
                real time.
              </li>
              <li>
                Optimized steel structure and SRC components with clustering,
                Newton&apos;s method, and slide algorithms to guide fabrication
                decisions.
              </li>
              <li>
                Achieved 400x performance improvement in angle radius
                calculations, significantly accelerating simulation capabilities
                for engineering teams.
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
                , focusing on algorithms for structural optimization applied to
                real-world construction constraints.
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
              : Built and maintain a Raycast extension in TypeScript that
              integrates pomodoro techniques into developer workflows.
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
              : Authored a VSCode extension adopted by 1.2M+ developers, making
              React and JavaScript scaffolding faster.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

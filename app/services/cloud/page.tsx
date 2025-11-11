import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaAws } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Cloud Services Egypt | AWS, Azure & Google Cloud Migration',
  description: 'Cloud infrastructure, migration, and management in Egypt. AWS, Azure, Google Cloud services. Scalable, secure, cost-effective. Starting from 20,000 EGP.',
  keywords: 'cloud services egypt, aws egypt, azure egypt, google cloud egypt, cloud migration, cloud infrastructure',
}

export default function CloudPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6">Cloud Services & Migration in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              Scalable, secure cloud infrastructure for modern businesses. We handle cloud migration, setup, and ongoing management on AWS, Azure, and Google Cloud.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Get Free Cloud Assessment <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Cloud Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Cloud Migration', desc: 'Seamless transition from on-premise to cloud. Planning, execution, testing, and training.', items: ['Server migration', 'Database migration', 'Application migration', 'Zero-downtime strategy'] },
              { title: 'Cloud Infrastructure Setup', desc: 'Complete cloud environment configuration. Virtual machines, networking, security, monitoring.', items: ['VPS/EC2 setup', 'Load balancing', 'Auto-scaling', 'Backup systems'] },
              { title: 'Serverless Architecture', desc: 'Modern serverless applications. Lambda functions, API Gateway, event-driven architecture.', items: ['AWS Lambda', 'Azure Functions', 'Cloud Functions', 'Cost optimization'] },
              { title: 'Database Management', desc: 'Cloud database setup and optimization. RDS, managed databases, backup strategies.', items: ['MySQL/PostgreSQL', 'MongoDB Atlas', 'Redis caching', 'Automated backups'] },
              { title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines. Continuous integration, continuous delivery, infrastructure as code.', items: ['GitHub Actions', 'GitLab CI/CD', 'Docker', 'Kubernetes'] },
              { title: 'Cloud Cost Optimization', desc: 'Reduce cloud spending without sacrificing performance. Cost analysis and optimization strategies.', items: ['Usage monitoring', 'Resource rightsizing', 'Reserved instances', 'Billing alerts'] }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-cyan-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Cloud Platforms We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Amazon Web Services (AWS)', features: ['EC2, S3, RDS', 'Lambda, CloudFront', 'Most popular platform', 'Best for scalability'] },
              { name: 'Microsoft Azure', features: ['Virtual Machines', 'Azure Functions', 'Great for enterprises', 'Windows integration'] },
              { name: 'Google Cloud Platform', features: ['Compute Engine', 'Cloud Functions', 'Best for AI/ML', 'Competitive pricing'] }
            ].map((platform, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold mb-4">{platform.name}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {platform.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free cloud assessment and migration plan tailored to your business needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Free Assessment <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className=" py-16 px-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">Glyne Terms & Conditions</h1>
      <p className="text-center text-xl mb-12 text-gray-600">Form F840-04 R6</p>
      
      <Card className="prose max-w-none mx-auto bg-white p-16 rounded-lg shadow-lg">
        <ol className="list-decimal space-y-6 text-gray-700">
          <li className="leading-relaxed">Glyne Manufacturing, its customers, and authorized government regulatory agencies reserve the right to visit subcontractor&apos;s premises to verify the quality of work being done and maintenance of records.</li>
          <li className="leading-relaxed">Under no circumstances is work to be transferred from your facility to another facility. If there is a process that will not yield conforming results due to either temporary or permanent incapability, Glyne Manufacturing must be notified immediately.</li>
          <li className="leading-relaxed">Any nonconforming parts must be segregated and Glyne Manufacturing notified with the count and reason(s) for nonconformance. Glyne Manufacturing approval must be obtained for nonconforming product disposition.</li>
          <li className="leading-relaxed">If, at any time, information comes to light that would invalidate the certification you supplied for your work you must notify Glyne Manufacturing within 48 hours.</li>
          <li className="leading-relaxed">All supplier quality systems and manufacturing process systems (ISO, AS, Nadcap) must be at the current revision level and valid at the time of processing this purchase order. If any certifications have lapsed you must notify Glyne Manufacturing within 48 hours, and stop work on any Glyne Manufacturing supplied product in your facility.</li>
          <li className="leading-relaxed">You must retain all quality records relevant to the services you provide us for a minimum of 15 years. If our purchase order designates a part as &quot;Flight Safety&quot;, those records must be kept for 40 years. At the conclusion of the retention period you may continue to maintain documents in a secure location, or permanently destroy them so they can&apos;t be used to support a counterfeit enterprise.</li>
          <li className="leading-relaxed">Any parts for which there is an established process, that process cannot be changed in any significant way without permission from Glyne Manufacturing. If a basic process in your shop has changed and you receive parts from Glyne that have not been done with that process, you must notify Glyne so that a test plan can be configured to establish the viability of the process.</li>
          <li className="leading-relaxed">Any persons working on parts for Glyne Manufacturing must be sufficiently trained or experienced for the work and, where training certifications apply, their certification must be up to date with documented information supporting this.</li>
          <li className="leading-relaxed">Where suppliers have developed special tooling, jigs or fixtures for processing, details of their use must be documented and maintained so as to provide continuity in the event of personnel changes.</li>
          <li className="leading-relaxed">If the purchase order identifies work as affecting a &quot;critical&quot; or &quot;key&quot; characteristic then you must state on your certification the inspection criteria used to verify product conformity.</li>
          <li className="leading-relaxed">All Glyne Manufacturing suppliers must be able to verify product and process conformance to all requirements and specifications on the Glyne Manufacturing purchase order. In cases where SPC or sampling is used for acceptance, these sampling rates must meet or exceed any requirements that are part of the specifications referenced on the purchase order.</li>
          <li className="leading-relaxed mb-4">All suppliers must have an active counterfeit prevention program in place to ensure the integrity of their materials and processes.</li>
          <ol className="list-decimal space-y-6 text-gray-700 mb-4">
            <li className="leading-relaxed"><strong>Material Distributors:</strong> Distributors must guarantee authenticity and full traceability for supplied material back to its original manufacture, including the accuracy of heat lot/manufacturing lot information. The preferred method is heat lot or production lot number stenciled on the material traceable to the identical number on the certificate of conformance. In cases where there is no stenciling the supplier is responsible for the cost of verifying the material matches the dimensions and specifications on the certificate of conformance.</li>
          </ol>
          <li className="leading-relaxed">You must have an active FOd(D) – foreign object debris & foreign object damage -- program and have documented evidence that your employees are aware of its importance.</li>
          <li className="leading-relaxed">All suppliers must have a QMS that provides an effective framework for implementing, controlling, monitoring all their processes and guaranteeing conformity of products and services. Documented information must be maintained to verify an effective QMS.</li>
          <li className="leading-relaxed">Supplier&apos;s employees must be aware of their contribution to product and service conformity, safety (where applicable), and the importance of ethical behavior especially in so far as its impact on conformity and quality of process outputs.</li>
          <li className="leading-relaxed">Glyne Manufacturing expects 100% quality and 100% on time delivery from its suppliers.</li>
          <li className="leading-relaxed">Suppliers who provide calibration services must be compliant with ISO 17025 and must meet Sikorsky Aircraft&apos;s requirement stated in SSQR-01 for annual eye examinations for individuals performing calibration of M & T resources.</li>
          <li className="leading-relaxed">Please prevent part-to-part contact during handling and processing at your facility. Absent any specific packaging instructions on our purchase order, please pack so parts are not in direct contact with each other, in a box or container with sufficient integrity to prevent damage during return shipment to us.</li>
        </ol>
      </Card>
      </div>
  )
}

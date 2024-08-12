import "../styling/PoliciesPage.css"; // Assume we create some basic styles

function PoliciesPage() {
  return (
    <div className="policies-page">
      <span className="page-title">Policies</span>
      <table className="policy-content">
        <tr>
          <td className="section-title">Payment terms</td>
          <td>
            <p>
              The following payment structure applies to the services provided
              by Mila Hayes Studio: <br />
              <br />
            </p>
            <p style={{ textTransform: "uppercase" }}>One-Time Projects:</p>
            <ul>
              <li>50% due upon approval of this proposal</li>
              <li>50% due upon the delivery of the third round</li>
            </ul>
            <br />
            <p style={{ textTransform: "uppercase" }}>Hourly Consultations:</p>
            <ul>
              <li>Billed monthly, based on actual hours spent.</li>
            </ul>
            <br />
            <p style={{ textTransform: "uppercase" }}>Retainer Agreements: </p>
            <ul>
              <li>
                Clients on a retainer must commit to a minimum of three months,
                with payments due at the start of each month.
              </li>
            </ul>
            <br />
            <p>
              Mila Hayes Studio reserves the right to impose an interest charge
              equal to 5% per month on any fees or in invoiced reimbursable
              expenses that remain unpaid after 20 days
            </p>
          </td>
        </tr>
        <tr className="empty-row"></tr>
        <tr>
          <td className="section-title">Cancellations & Refunds</td>
          <td>
            <p>
              Due to the nature of the work, refunds will not be issued after
              any part of the design process has been completed. <br /> <br />
            </p>
            <p>
              Either party may terminate a service at any point. Mila Hayes
              Studio will be compensated for all work completed up to the
              termination date. On termination of this agreement for any reason,
              the client should immediately pay all of their outstanding unpaid
              invoices and interest to date.
            </p>
          </td>
        </tr>
        <tr className="empty-row"></tr>
        <tr>
          <td className="section-title">Conditions of Service</td>
          <td>
            <p>
              To ensure effective and efficient delivery of services, clients
              must: <br /> <br />
            </p>
            <ol>
              <li>Provide all necessary information and approvals promptly.</li>
              <li>
                Respond to queries and requests for feedback within 48 hours.
              </li>
              <li>
                Advise Mila Hayes Studio immediately of any changes in project
                scope or direction.
              </li>
            </ol>
          </td>
        </tr>
        <tr className="empty-row"></tr>
      </table>
    </div>
  );
}

export default PoliciesPage;

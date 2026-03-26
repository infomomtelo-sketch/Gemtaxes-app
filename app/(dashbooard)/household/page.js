export default function HouseholdPage() {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Household</h1>

      <div style={{ display: 'grid', gap: '16px', maxWidth: '700px' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3>Primary Taxpayer</h3>
          <p>Name: —</p>
          <p>ID Type: SSN</p>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3>Spouse</h3>
          <p>Name: —</p>
          <p>ID Type: ITIN</p>
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
          <h3>Dependents</h3>
          <p>No dependents added yet.</p>
        </div>
      </div>
    </div>
  )
}

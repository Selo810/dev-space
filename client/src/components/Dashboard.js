import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';



const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboardsssss"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong> {secretData}</CardText>}
  </Card>
);

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired
// };

export default Dashboard;
  
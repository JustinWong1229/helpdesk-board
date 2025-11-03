export async function GET () {
    const tickets = [
    {
      "id": "t-1020",
      "title": "Cannot connect to VPN",
      "description": "User reports intermittent VPN connectivity errors.",
      "priority": "High",
      "status": "Open",
      "assignee": "Unassigned",
      "updatedAt": "2025-10-31T14:05:00Z"
    },
    {
      "id": "t-1021",
      "title": "Email sync failing on mobile",
      "description": "Exchange account stops syncing after device restart.",
      "priority": "Medium",
      "status": "In Progress",
      "assignee": "Priya Nair",
      "updatedAt": "2025-11-02T09:20:00Z"
    },
    {
      "id": "t-1022",
      "title": "New hire laptop provisioning",
      "description": "Prepare a MacBook with standard image for incoming analyst.",
      "priority": "Low",
      "status": "On Hold",
      "assignee": "IT Fulfillment Queue",
      "updatedAt": "2025-10-29T16:45:00Z"
    },
    {
      "id": "t-1023",
      "title": "SSO login redirect loop",
      "description": "Okta login bounces users between IdP and app.",
      "priority": "Critical",
      "status": "Open",
      "assignee": "Incident Squad",
      "updatedAt": "2025-11-03T12:15:00Z"
    },
    {
      "id": "t-1024",
      "title": "Printer offline on 4th floor",
      "description": "Konica printer shows offline for all users.",
      "priority": "Medium",
      "status": "Resolved",
      "assignee": "Diego Morales",
      "updatedAt": "2025-10-28T11:02:00Z"
    },
    {
      "id": "t-1025",
      "title": "Access request: Finance shared drive",
      "description": "Contractor requesting read access to Finance folder.",
      "priority": "Low",
      "status": "Open",
      "assignee": "Unassigned",
      "updatedAt": "2025-11-01T08:30:00Z"
    },
    {
      "id": "t-1026",
      "title": "Slack notifications delayed",
      "description": "Users report message alerts arriving 10–15 minutes late.",
      "priority": "High",
      "status": "In Progress",
      "assignee": "Maya Chen",
      "updatedAt": "2025-11-03T10:05:00Z"
    },
    {
      "id": "t-1027",
      "title": "Password reset loop in OWA",
      "description": "User asked to reset password repeatedly after successful change.",
      "priority": "Medium",
      "status": "Resolved",
      "assignee": "Alex Johnson",
      "updatedAt": "2025-10-30T13:55:00Z"
    },
    {
      "id": "t-1028",
      "title": "Zoom room camera not detected",
      "description": "Conference room A/V shows no camera device.",
      "priority": "High",
      "status": "Open",
      "assignee": "Facilities IT",
      "updatedAt": "2025-11-03T09:48:00Z"
    },
    {
      "id": "t-1029",
      "title": "Endpoint antivirus false positive",
      "description": "Latest signature quarantines internal updater.exe.",
      "priority": "Critical",
      "status": "In Progress",
      "assignee": "SecOps On-Call",
      "updatedAt": "2025-11-02T21:10:00Z"
    },
    {
      "id": "t-1030",
      "title": "Jira project permissions",
      "description": "Team cannot edit issues in OPS board after migration.",
      "priority": "Medium",
      "status": "Open",
      "assignee": "Unassigned",
      "updatedAt": "2025-11-03T08:12:00Z"
    },
    {
      "id": "t-1031",
      "title": "Wi-Fi dropping in East wing",
      "description": "Frequent disconnections on SSID CorpNet between 2–4pm.",
      "priority": "High",
      "status": "On Hold",
      "assignee": "Network Team",
      "updatedAt": "2025-10-31T17:22:00Z"
    },
    {
      "id": "t-1032",
      "title": "Git access for new repo",
      "description": "Developer requests write access to repo analytics-service.",
      "priority": "Low",
      "status": "Resolved",
      "assignee": "Rita Patel",
      "updatedAt": "2025-10-27T15:00:00Z"
    },
    {
      "id": "t-1033",
      "title": "Laptop battery swelling",
      "description": "Employee reports trackpad bulging due to battery.",
      "priority": "Critical",
      "status": "Open",
      "assignee": "Hardware RMA Queue",
      "updatedAt": "2025-11-03T11:33:00Z"
    },
  ];
}
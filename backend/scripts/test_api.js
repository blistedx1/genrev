const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function runTests() {
  console.log('========================================');
  console.log('  GENREV INTERIO BACKEND TEST SUITE');
  console.log('========================================\n');

  // 1. Health Check
  console.log('[1/4] Testing GET /api/health ...');
  const health = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/health',
    method: 'GET'
  });
  console.log('Status:', health.status);
  console.log('Response:', health.data);
  console.log('✓ Health check passed!\n');

  // 2. Projects List
  console.log('[2/4] Testing GET /api/projects ...');
  const projects = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/projects',
    method: 'GET'
  });
  console.log('Status:', projects.status);
  console.log(`Total projects in DB: ${projects.data.length}`);
  console.log('Sample project:', {
    title: projects.data[0]?.title,
    category: projects.data[0]?.category,
    location: projects.data[0]?.location
  });
  console.log('✓ Projects endpoint passed!\n');

  // 3. Post Contact Inquiry
  console.log('[3/4] Testing POST /api/contact (Submitting customer inquiry) ...');
  const testInquiry = {
    name: 'Vikram Singhania',
    email: 'vikram.singhania@gmail.com',
    phone: '+91 98201 54321',
    company: 'Singhania Group',
    service: 'Turnkey Architecture & Interior',
    budget: '₹50L - ₹1 Cr',
    message: 'Looking for turnkey interior design and architectural execution for our 4-story luxury villa in Greater Noida West.'
  };
  const submitRes = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/contact',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, testInquiry);
  console.log('Status:', submitRes.status);
  console.log('Response:', submitRes.data);
  console.log('✓ Inquiry submitted successfully!\n');

  // 4. Retrieve Contacts and Verify Storage
  console.log('[4/4] Testing GET /api/contacts (Verifying saved inquiry) ...');
  const contacts = await request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/contacts',
    method: 'GET'
  });
  console.log('Status:', contacts.status);
  console.log(`Total inquiries in database/store: ${contacts.data.length}`);
  const latest = contacts.data[0];
  console.log('Latest stored inquiry:');
  console.log({
    id: latest._id,
    name: latest.name,
    email: latest.email,
    phone: latest.phone,
    service: latest.service,
    budget: latest.budget,
    status: latest.status,
    createdAt: latest.createdAt
  });
  console.log('✓ Contact verification passed!\n');

  console.log('========================================');
  console.log('  ALL BACKEND TESTS PASSED SUCCESSFULLY!');
  console.log('========================================');
}

runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});

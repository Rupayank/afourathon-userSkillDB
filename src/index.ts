import app from './server';

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});

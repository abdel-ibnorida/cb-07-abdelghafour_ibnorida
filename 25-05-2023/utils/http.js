export const GET = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const POST = async (url, bodyInput, userIdInput) => {
    const res = await fetch(url , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: bodyInput,
        completed: false,
        userId: userIdInput,
      })
    });
    const data = await res.json();
    return data;
};

export const DELETE = async(url) => {
  const res = await fetch(url,{
    method: 'DELETE',
  })
  const data = await res.json();
  return data;     
}
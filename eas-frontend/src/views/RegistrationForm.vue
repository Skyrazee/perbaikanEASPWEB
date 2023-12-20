<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <form @submit.prevent="daftarLomba" class="flex flex-col bg-white rounded shadow-lg p-12" action="">
          <div class="flex justify-center">
              <h1 class="font-bold text-2xl">Register Now!</h1>
          </div>
          <div class="mt-6">
              <label class="font-semibold text-xs" for="usernameField">Name</label>
              <input
                  v-model="nama"
                  class="flex items-center h-12 px-4 w-64 bg-white-200 mt-2 rounded focus:outline-none focus:ring-2"
                  type="text"
              />
              <label class="font-semibold text-xs mt-3" for="passwordField">Email</label>
              <input
                  v-model="email"
                  class="flex items-center h-12 px-4 w-64 bg-white-200 mt-2 rounded focus:outline-none focus:ring-2"
                  type="email"
              />
              <label class="font-semibold text-xs mt-3" for="passwordField">School</label>
              <input
                  v-model="asalSekolah"
                  class="flex items-center h-12 px-4 w-64 bg-white-200 mt-2 rounded focus:outline-none focus:ring-2"
                  type="text"
              />
              <button
                  type="submit"
                  class="flex items-center justify-center h-10 px-4 w-60 bg-green-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-green-700"
              >
                  Daftar
              </button>
          </div>
          <div class="flex mt-6 justify-center text-xs">
              <a class="text-green-400 hover:text-green-500" href="/status">Registration Check</a>
          </div>
      </form>
  </main>
</template>
<script>
export default {
  data() {
      return {
          nama: '',
          email: '',
          asalSekolah: '',
      };
  },
  methods: {
      async daftarLomba() {
          const pesertaBaru = {
              nama: this.nama,
              email: this.email,
              asalSekolah: this.asalSekolah,
              status: 'waiting',
              tanggalDaftar: new Date().toISOString(),
          };

          try {
              const req = await fetch('http://localhost:3000/api/accounts', {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(pesertaBaru),
              });

              if (!req.ok) {
                  const errorMsg = (await req.json())?.errors[0].message;
                  throw new Error(errorMsg);
              }
          } catch (error) {
              alert('There was an error during registration: ' + error.message);
          }
      },
  },
};
</script>

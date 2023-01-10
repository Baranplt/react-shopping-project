/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1500px',
      },
    },
    extend: {
      backgroundImage: {
        'watch': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/two_banner/bannerblock-1.jpg')",
        'camera': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/two_banner/bannerblock-2.jpg')",
        'device': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/prductbanner/banner1.jpg')",
        'electronic': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/prductbanner/banner2.jpg')",
        'banner': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/onebanner.jpg')",
        'brandArrival': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/newsletterbanner/newsletterbanner1.jpg')",
        'brandArrivalcam': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/newsletterbanner/newsletterbanner2.jpg')",
        'newsLatter': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/newsletter_bg.png')",
        'footer': "url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/footerbackground.jpg')"

      },
      colors: {
        primary: "#323c9d",
      },
    },
  },
  plugins: [],
}

// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Lato', 'sans-serif'], // Основной шрифт для всего проекта
            lato: ['Lato', 'sans-serif'], // Дополнительный класс font-lato
            semibold: [],
          },
          fontSize: {
            
          },
          fontWeight: {
            
          },
          lineHeight: {
             
          },
          letterSpacing: {
             
          },
          borderRadius: {
              
          },
          colors: {
            
            
          },
          spacing: {
              
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          
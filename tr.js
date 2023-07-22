const list = [
    {
        
        menu : "Menu 1",
        sub: [
            {
                title: 'Sub 1'
            },
            {
                title: 'Sub 2'
            }
        ]

        
    },
    {
     
        menu : "Menu 2",
        sub: [
            {
                title: 'Sub 21'
            },
            {
                title: 'Sub 22'
            }
        ]
      
    },
    {
       
        menu : "Menu 3"
    },
    {
  
        menu : "Menu 4"
    },
    {
      
        menu : "Menu 5"
    },
]

 list.map((menu, index) => {
     console.log(`${menu.menu} index : ${index}  ${menu.sub ? `sub : ${menu.sub.map(e => e.title)} `: ''}`  )
})
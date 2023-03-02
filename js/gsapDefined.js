// Gsap register plugin
gsap.registerPlugin(ScrollTrigger)

// 導覽列 Active 位置
$('.link').each(function (index, link) {
  let href = $(link).attr('href') // 抓 id #home、#about、#skill...
  // console.log(href)

  gsap.to(link, {
    scrollTrigger: {
      trigger: `${href}`, 
      start: 'top center',
      end: 'bottom center',
      toggleClass: {
        targets: link,
        className: 'active'
      }, 
      // markers: true
    }
  })
})
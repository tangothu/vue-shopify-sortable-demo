<template>
  <div id="app" class="min-h-screen text-black bg-grey-lighter p-8">
    <div class="bg-white rounded shadow-lg max-w-md mx-auto py-8 px-4">

      <snappable>
        <section id="Snappable" class="Snappable">
           <div>
              <article class="BlockLayout BlockLayout--typeGrid--External" tabindex="0">
                 <div class="BlockWrapper">
                    <a href="#" class="Block Block--item100 Block--isDraggable draggable-source" title="Click to drag" style="">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">External Event 1</h3>
                          <div class="Pattern Pattern--typeHalftone"></div>
                          <div class="Pattern Pattern--typePlaced"></div>
                       </div>
                    </a>
                 </div>
                 <div class="BlockWrapper">
                     <vue-draggable-resizable class="snap-resizable" :parent="true" :grid="[0,100]" :z="999" :w="396">
                        <a href="#" class="Block Block--item101 Block--isDraggable draggable-source" title="Click to drag" style="">
                              <div class="BlockContent">
                                    <h3 class="Heading Heading--size4 text-no-select">External Event 2</h3>
                                    <div class="Pattern Pattern--typeHalftone"></div>
                                    <div class="Pattern Pattern--typePlaced"></div>
                              </div>
                        </a>
                     </vue-draggable-resizable>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item103 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <a href="#" class="Block Block--item104 Block--isDraggable draggable-source" title="Click to drag">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">External Event 4</h3>
                          <div class="Pattern Pattern--typeHalftone"></div>
                          <div class="Pattern Pattern--typePlaced"></div>
                       </div>
                    </a>
                 </div>
              </article>
           </div>
           <div>
              <article class="BlockLayout BlockLayout--typeGrid" tabindex="0">
                 <div class="BlockWrapper">
                    <a href="#" class="Block Block--item1 Block--isDraggable draggable-source" title="Click to drag">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 1</h3>
                          <div class="Pattern Pattern--typeHalftone"></div>
                          <div class="Pattern Pattern--typePlaced"></div>
                       </div>
                    </a>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--item2">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 2</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item3 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item4 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--item5">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 5</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item6 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <a href="#" class="Block Block--item7 Block--isDraggable draggable-source" title="Click to drag">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 7</h3>
                          <div class="Pattern Pattern--typeHalftone"></div>
                          <div class="Pattern Pattern--typePlaced"></div>
                       </div>
                    </a>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--item8">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 8</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item9 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--item10">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 10</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeStripes Block--item11 draggable-source" tabindex="0">
                       <div class="BlockContent"></div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <a href="#" class="Block Block--item12 Block--isDraggable draggable-source" title="Click to drag">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">Event 12</h3>
                          <div class="Pattern Pattern--typeHalftone"></div>
                          <div class="Pattern Pattern--typePlaced"></div>
                       </div>
                    </a>
                 </div>
              </article>
           </div>
           <div>
              <article class="BlockLayout BlockLayout--typeGrid--TimeSlot" tabindex="0">
                 <div class="BlockWrapper">
                    <span class="Block Block--typeHollow">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">8:00AM - 11:00AM</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeHollow">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">11:00AM - 2:00PM</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeHollow">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">2:00PM - 5:00PM</h3>
                       </div>
                    </span>
                 </div>
                 <div class="BlockWrapper">
                    <span class="Block Block--typeHollow">
                       <div class="BlockContent">
                          <h3 class="Heading Heading--size4 text-no-select">5:00PM - 8:00PM</h3>
                       </div>
                    </span>
                 </div>
              </article>
           </div>
        </section>
      </snappable>

    </div>
  </div>
</template>

<script>
import Snappable from './components/Snappable'
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'app',
  components: {
    'snappable': Snappable,
    'vue-draggable-resizable': VueDraggableResizable
  },
  data() {
    return {
      todos: [
        { id: 1, description: "Get travel insurance", complete: false },
        { id: 2, description: "Pay hydro bill", complete: false },
        { id: 3, description: "Record podcast with Taylor", complete: false },
        { id: 4, description: "Design Twitter card for new landing page", complete: false },
        { id: 5, description: "Update credit card for Typekit subscription", complete: false },
      ],
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './assets/css/examples-app.css';

.snap-resizable {
    height: auto;
    width: auto;
}
</style>

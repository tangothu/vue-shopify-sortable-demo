<script>
  import {Swappable, Plugins} from '@shopify/draggable';

  export default {
    props: {
    },
    render() {
      return this.$slots.default[0]
    },
    mounted() {
      const containerSelector = '#Snappable .BlockLayout';
      const swappable = new Swappable(this.$el, {
        mirror: {
          appendTo: containerSelector,
          constrainDimensions: true,
        },
        plugins: [Plugins.Snappable]
      }).on('drag:start', (evt) => {
        if (evt.originalSource.classList.contains('Block--typeStripes')) {
          evt.cancel();
        }
      })
    }
  }

</script>
<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true,
      default: null
    },
    options: {
      type: Object,
      required: true,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData: {
      handler: function () {
        this.renderChart(this.chartData, this.options)
      },
      deep: true
    }
  }
}
</script>

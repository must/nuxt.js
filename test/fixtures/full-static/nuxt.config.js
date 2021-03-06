export default {
  target: 'static',
  export: {
    payload: {
      config: true
    }
  },
  hooks: {
    export: {
      before ({ setPayload }) {
        setPayload({ shared: true })
      },
      route ({ route, setPayload }) {
        setPayload({ myRoute: route })
      }
    }
  }
}

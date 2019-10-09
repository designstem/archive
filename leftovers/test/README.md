Touch me!
<div>
  <button @click="$events.$emit('touch', 'fak')">Touch</button>
</div>

---

<f-message-data>
  <pre slot-scope="data">
    {{ data }}
  </pre>
</f-message-data>
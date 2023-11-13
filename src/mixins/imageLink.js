export default {
  methods: {
    $imageLink(link) {
      const filename = link.split("/").slice(2).join("/");

      return require("@/assets/" + filename);
    },
  },
};

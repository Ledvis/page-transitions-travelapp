export default function(context) {
  context.store.commit('UPDATE_PAGE', context.route.name);
}

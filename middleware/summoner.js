export default function ({ redirect, route, i18n }) {
  if (!route.params.name) {
    return redirect({
      name: `index___${i18n.locale}`,
    });
  }
}

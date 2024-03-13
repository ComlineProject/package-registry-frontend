// Local Imports
import type { PackageMeta } from "$lib/package"


export const load = ({ params }) => {
    let packageMeta: PackageMeta = {
        id: params.slug,
        namespace: "comline-test",
        name: "Test",
        current_version: "0.1.0",
        description: "# Test Package\nA test package",
        owners: ["Comline", "Comline Test"],
        licenses: "MIT",
        docsUrl: "localhost:8080/docs/comline-test/test",
        repositoryUrl: new URL("localhost:8080/repos/comline-test/test"),
        lastUpdate: new Date(),
        tags: ["test", "test-package"],
        categories: ["Tests"]
    }

    return {
        packageMeta: packageMeta
    }
}

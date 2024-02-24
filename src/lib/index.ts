
interface AuthMethod {
    id: string
    name: string
    description: string   
}

interface PackageMeta {
    id: string
    namespace: string
    name: string
    current_version: string
    description: string
    owners: string[]
    licenses: string

    docsUrl: string
    repositoryUrl: string
    lastUpdate: Date

    tags: string[]
    categories: string[]
}

interface PackageStats {
    id: string
}

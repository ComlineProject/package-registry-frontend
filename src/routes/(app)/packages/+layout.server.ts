import type { PackageMeta } from '$lib/package';

export function load() {
	const packageMetas: PackageMeta[] = [
		{
			id: 'test',
			namespace: 'comline-test',
			name: 'Test',
			current_version: '0.1.0',
			description: '# Test Package\nA test package',
			owners: ['Comline', 'Comline Test'],
			licenses: ['MIT'],
			docsUrl: 'localhost:8080/docs/comline-test/test',
			repositoryUrl: new URL('http://localhost:8080/repos/comline-test/test'),
			lastUpdate: new Date(),
			tags: ['test', 'test-package'],
			categories: ['Tests']
		},
		{
			id: 'another_test',
			namespace: 'another-test',
			name: 'Another Test',
			current_version: '0.1.1',
			description: '# Yet Another Test Package\nA test package',
			owners: ['Comline', 'Comline Test'],
			licenses: ['MIT'],
			docsUrl: 'localhost:8080/docs/comline-test/test',
			repositoryUrl: new URL('http://localhost:8080/repos/comline-test/test'),
			lastUpdate: new Date(),
			tags: ['test', 'test-package'],
			categories: ['Tests']
		}
	];

	return {
		packageMetas: packageMetas
	};
}

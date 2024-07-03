module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace(/src([/\\]tests)/, 'src/tests/snapshots') + snapshotExtension
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace('src/tests/snapshots', 'src/tests')
      .slice(0, -snapshotExtension.length)
  },
  testPathForConsistencyCheck: 'src/tests/NotFound.test.tsx',
}

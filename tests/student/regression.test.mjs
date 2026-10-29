import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
// Incident: viewer user-4 received claim-B, owned by user-42 (docs/contract.md).
test('viewer whose ID is a prefix of the owner ID cannot view the claim', () => {
  const claim = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claim], 'user-4', 'claim-B'), null);
});

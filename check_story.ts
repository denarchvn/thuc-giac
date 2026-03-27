
import { STORY_DATA } from './src/data/story';

const nodes = Object.keys(STORY_DATA);
console.log(`Total nodes: ${nodes.length}`);

const brokenLinks: string[] = [];
const deadEnds: string[] = [];
nodes.forEach(nodeId => {
  const node = STORY_DATA[nodeId];
  if (node.choices.length === 0 && !node.isEnding) {
    deadEnds.push(nodeId);
  }
  node.choices.forEach(choice => {
    if (!STORY_DATA[choice.nextNodeId]) {
      brokenLinks.push(`${nodeId} -> ${choice.nextNodeId}`);
    }
  });
});

if (brokenLinks.length > 0) {
  console.log('Broken links found:');
  brokenLinks.forEach(link => console.log(link));
} else {
  console.log('No broken links found.');
}

if (deadEnds.length > 0) {
  console.log('Dead ends found (no choices and not marked as ending):');
  deadEnds.forEach(node => console.log(node));
} else {
  console.log('No dead ends found.');
}

// Reachability check
const reachable = new Set<string>();
const queue = ['start'];
reachable.add('start');

while (queue.length > 0) {
  const current = queue.shift()!;
  const node = STORY_DATA[current];
  if (node) {
    node.choices.forEach(choice => {
      if (!reachable.has(choice.nextNodeId)) {
        reachable.add(choice.nextNodeId);
        queue.push(choice.nextNodeId);
      }
    });
  }
}

const unreachable = nodes.filter(nodeId => !reachable.has(nodeId));
if (unreachable.length > 0) {
  console.log('Unreachable nodes:');
  unreachable.forEach(node => console.log(node));
} else {
  console.log('All nodes are reachable from "start".');
}

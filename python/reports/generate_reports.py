import csv,sys
# Generate a simple CSV from JSON rows passed through stdin.
rows=__import__('json').loads(sys.stdin.read() or '[]');
w=csv.writer(sys.stdout);w.writerow(rows[0].keys() if rows else ['message']);[w.writerow(r.values()) for r in rows]

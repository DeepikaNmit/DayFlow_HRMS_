import sys,json
# Lightweight reusable analytics helper. Input JSON: [{"status":"Present"}, ...]
data=json.loads(sys.stdin.read() or '[]'); total=len(data); present=sum(x.get('status')=='Present' for x in data)
print(json.dumps({'total':total,'present':present,'attendance_percentage':round(present*100/total,2) if total else 0}))

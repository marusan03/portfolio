import csv
import json

json_list = []
json_data = {}

# CSVファイルのロード
with open("./src/contents/data/skills.csv", "r") as f:
    # list of dictの作成
    for line in csv.DictReader(f):
        json_list.append(line)

    json_data["skills"] = json_list
    print(json_data)

with open("./src/contents/data/skills.json", "w") as f:
    # JSONへの書き込み
    json.dump(json_data, f, ensure_ascii=False, indent=2)

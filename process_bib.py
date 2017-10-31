import bibtexparser

input_file_path = 'McCallum-Andrew-standard.bib'

with open(input_file_path) as bibtex_file:
    bibtex_str = bibtex_file.read()

bib_database = bibtexparser.loads(bibtex_str)
print(bib_database.entries[0])

title_d2_book = {}

#booktitle = 'booktitle'
#journal = 'journal'

print 'number of entry', len(bib_database.entries)
print 
for entry in bib_database.entries:
	if entry['ENTRYTYPE'] == 'proceedings':
		continue
	if entry['title'] not in title_d2_book:
		title_d2_book[entry['title']] = []
	if 'booktitle' in entry:
		title_d2_book[entry['title']].append(entry['booktitle'])
	elif 'journal' in entry:
		title_d2_book[entry['title']].append(entry['journal'])
	else:
		print entry

print 'number of titles',len(title_d2_book)

for title in title_d2_book:
	if len(title_d2_book[title])>2 or (len(title_d2_book[title])==2 and 'CoRR' not in title_d2_book[title]):
		print title
		print title_d2_book[title]

valid_entries = []
for entry in bib_database.entries:
	if entry['ENTRYTYPE'] == 'proceedings':
		continue
	if entry['title'] not in title_d2_book:
		continue
	if len(title_d2_book[entry['title']])>1 and 'journal' in entry and entry['journal'] == 'CoRR': 
		continue
	#if len(title_d2_book[entry['title']])==1: 
	valid_entries.append(entry)
	
print 'number of valid entris',len(valid_entries)

for entry in valid_entries:
	for att in entry:
		entry[att] = entry[att].replace('@',' at ').replace('\n',' ')

db = bibtexparser.bibdatabase.BibDatabase()
db.entries = valid_entries

print(db.entries[0])

writer = bibtexparser.bwriter.BibTexWriter()
indent = '    '
writer.order_entries_by = ('year', 'author', 'title', 'ENTRYTYPE')
with open('bibtex_test_3.bib', 'w') as bibfile:
    bibfile.write(writer.write(db))
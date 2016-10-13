#
# makefileによるwebpackのバンドル処理
# dependに対応しているので不要な再バンドルをskip出来る
#

TARGET = dist/bundle.js

DEP = makefile.depend

# ===============================================

all: $(TARGET)

depend:
	echo -n '$(TARGET): ' > $(DEP)
	node_modules/.bin/webpack --json \
		| grep -o '"identifier":[^"]*"[^"]*"' \
		| sed -e 's/.*: "\([^"]*\)"/ \1 \\/g' \
		| sort | uniq \
		>> $(DEP)

$(TARGET):
	node_modules/.bin/webpack

-include $(DEP)

# ===============================================

clean:
	rm -f $(TARGET)
	rm -f $(DEP)

.PHONY: depend clean

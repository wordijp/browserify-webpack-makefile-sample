#
# makefileによるbrowserifyのバンドル処理
# dependに対応しているので不要な再バンドルをskip出来る
#

TARGET = dist/bundle.js

PLUGS = \

TRS = \
	-t babelify \

SRCS = \
	src/index.jsx \

DEP = makefile.depend

# ===============================================

all: $(TARGET)

depend:
	echo -n '$(TARGET): ' > $(DEP)
	node_modules/.bin/module-deps $(PLUGS) $(TRS) $(SRCS) \
		| grep -o '"file":"[^"]*"' \
		| sed -e 's/.*:"\([^"]*\)"/ \1 \\/g' \
		>> $(DEP)

$(TARGET):
	node_modules/.bin/browserify -v $(PLUGS) $(TRS) -o $(TARGET) $(SRCS)

-include $(DEP)

# ===============================================

clean:
	rm -f $(TARGET)
	rm -f $(DEP)

.PHONY: depend clean
